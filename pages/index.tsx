
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

import React, { useEffect, useRef, useState } from 'react'
import invert from '../public/invert'

import SettingsMenu from '@components/settings_prefrences'
import QuoteOfTheDay from '@components/qotd'

import { createListener } from "keyboardist";
import { Binding, Document, User } from '@public/@types/document'

import { ArrowRight, Box, Check, Eye, Plus, Settings, Square, Trash, X } from 'react-feather'
import Scene from '@components/scene'
import SettingsPage from '@components/settings_page'
import { DocumentContext } from '@public/@types/document_context'

import FirstTime from '@components/first_time'
import { supabase } from '@root/client'

import { getThemeColor, loadTheme, theme_list } from '@public/@types/themes'
import { RGBToHex } from '@public/@types/themes'

import { ntc } from '@components/ntc'

import fetch from 'node-fetch';
global.fetch = fetch;

import { createApi } from 'unsplash-js'
import Clock from '@components/clock'
import { setOriginalNode } from 'typescript'
import PowerTools from '@components/powertools_component'
import Todo from '@components/todo_component'
import Credit from '@components/credit'
import Jottit from '@components/jottit'

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

const unSPLASH = createApi({ accessKey: "XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4" });

export default function Home() {
	const [ userData, setUserData ] = useState<User>(null);
	const [ backgroundStyle, sbs ] = useState(null);
	const [ backgroundStats, sbst ] = useState(null);
	
	const saveSettings = () => {
		supabase
			.from('users')
			.update({
				settings: JSON.stringify({
					...documentSettings,
					storage: {
						...documentSettings.storage,
						todo: todo ? todo : [],
						jottit: jottit
					}
				}, (k,v) => typeof v === "function" ? "" + v : v),
				last_changed: new Date()
			})
			.match({
				id: supabase.auth.user().id
			})
			.then(e => {
				console.log("[AUTO-SAVE]: Saved Settings", e)
				if(e.data) {
					localStorage.setItem("last-changed", JSON.stringify(e.data[0].last_changed));
					localStorage.setItem("settings", JSON.stringify({
						...documentSettings,
						storage: {
							...documentSettings.storage,
							todo: todo ? todo : [],
							jottit: jottit
						}
					}, (k,v) => typeof v === "function" ? "" + v : v));
				}
			})
	}

	const saveStorageItems = () => {
		if(supabase.auth.user()) {
			console.log("[AUTO-SAVE]: Saved Storage Items", {
				...documentSettings,
				storage: {
					...documentSettings.storage,
					todo: todo ? todo : [],
					jottit: jottit
				}
			});
			
			saveSettings();
		}
	}

	const seekChanges = () => {
		if(supabase.auth.user()?.aud == 'authenticated')
			supabase
				.from('users')
				.select('*')
				.match({ id: supabase.auth.user().id })
				.then(e => {
					if(!e.data[0]) return;

					const last_changed_ = JSON.parse(localStorage.getItem("last-changed"));

					if(new Date(last_changed_).getTime() - new Date(e.data[0].last_changed).getTime() < 0 || !last_changed_) {
						// Time has passed (out of date, please update)
						console.log("[SEEK]:\t\t OUT OF DATE ~ UPDATING INFORMATION...");

						setTodo(e.data[0].settings.storage?.todo ? e.data[0].settings.storage?.todo : []);
						setJottit(e.data[0].settings.storage?.jottit);
						
						setDocumentSettings({
							...JSON.parse(e.data[0].settings, (k,v) => typeof v === "string" ? (v.startsWith('function') ? eval("(" + v + ")") : v): v ), // eval("("+v+")")
							states: {
								editingTitle: false,
								settingsOpen: false,
								searchOpen: false
							}
						});

						console.log("DOWNLOADED ",{
							...JSON.parse(e.data[0].settings, (k,v) => typeof v === "string" ? (v.startsWith('function') ? eval("(" + v + ")") : v): v ), // eval("("+v+")")
							states: {
								editingTitle: false,
								settingsOpen: false,
								searchOpen: false
							}
						});

						localStorage.setItem("todo", JSON.stringify(e.data[0].settings.todo ? e.data[0].settings.todo : []));
					}else {
						console.log("[SEEK]:\t\t UP TO DATE")
						// On the latest version, probably should reciprocate information to the server if not matching...
						// saveTodo();
						// saveSettings();
					}
				});
	}

	
	const [ documentSettings, setDocumentSettings ] = useState<Document>(
		(process.browser) && localStorage.getItem("settings") ? 
		{
			...JSON.parse(localStorage.getItem("settings"), (k,v) => typeof v === "string" ? (v.startsWith('function') ? eval("(" + v + ")") : v): v ), // eval("("+v+")")
			states: {
				editingTitle: false,
				editingJottTitle: false,
				settingsOpen: false,
				searchOpen: false,
				assignedPowerbinds: false,
				activeJott: 0
			}
		}
		: 
		{
			states: {
				editingTitle: false,
				editingJottTitle: false,
				settingsOpen: false,
				searchOpen: false,
				assignedPowerbinds: false,
				activeJott: 0
			},
			storage: {
				todo: [],
				jottit: [
					{
						title: 'My Jot',
						content: 'Start Writing Here!'
					}
				]
			},
			settings: {
				title: {
					value: 'things to do',
					desc: 'Title of TODO List',
					type: "input"
				},
				jottit: {
					value: false,
					desc: 'Jot notes down easily that are automatically synced.',
					type:"toggle"
				},
				theme: {
					value: 'default',
					desc: 'Customisable Daily Theme',
					type: "invisible"
				},
				showToDo: {
					value: true,
					desc: 'Toggles visibility of TODO List',
					type: "toggle"
				},
				showAds: {
					value: false,
					desc: 'Show some support without paying any money!',
					type: "toggle"
				},
				hour24: {
					value: false,
					desc: 'View time in 24H, instead of 12H',
					type: "toggle"
				},
				shortDate: {
					value: false,
					desc: 'Shortens the Date',
					type: "toggle"
				},
				quoteOfTheDay: {
					value: false,
					desc: 'Shows a new inspirational quote every day',
					type: "toggle"
				},
				firstTime: {
					value: true,
					desc: 'If this is the first user login, show startup',
					type: "invisible"
				},
				backgroundType: {
					value: "standard",
					desc: 'Changes the background prefrence of the user',
					type: "list[standard, chaos]"
				},  //standard, chaos, custom
				backgroundImage: {
					value: "dynamic",
					desc: "Changes the background image for standard and custom",
					type: "invisible"
				}
			},
			powertools: {
				search_engine: "duckduckgo",
				powerbinds: [
					{
						title: "search",
						bind: 's',
						desc: 'Uses the selected search engine to perform standard internet search',
						action: (string) => {
							switch(documentSettings.powertools.search_engine) {
								case "duckduckgo": 
									window.location.replace(`https://duckduckgo.com/?q=${string}`)
									break;
								case "google":
									window.location.replace(`https://www.google.com/search?q=${string}`)
									break;
								case "escosia":
									window.location.replace(`https://www.ecosia.org/search?q=${string}`)
									break;
								default:
									window.location.replace(`https://duckduckgo.com/?q=${string}`)
									break;
							}
						}
					},
					{
						title: "settings",
						bind: 'v',
						desc: 'Open or Change Settings on the fly',
						action: (string) => {
		
						}
					},
					{
						title: "task",
						bind: 't',
						desc: 'Add a task to the TODO list without lifting the mouse',
						action: (string) => {
							setTodo([
								...todo,
								{
									editable: false,
									title: string,
									completed: false
								}
							])

							localStorage.setItem("todo", JSON.stringify(todo));
							saveStorageItems();
						}
					},
					{
						title: "wikipedia",
						bind: 'w',
						desc: 'Search Wikipedia!',
						action: (string) => {
							window.location.replace(`https://en.wikipedia.org/wiki/${string}`)
						}
					}
				]
			}
		}
	);

	

	if(!process.browser) return <></>;
	
	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			console.log('[USER]:\tAuth State Changed Fetching...')
			if(session.user.id)
				supabase
					.from('users')
					.select('*')
					.eq('id', session.user.id)
					.then(usr => {
						setUserData(usr.data[0]);
						seekChanges();
					});
		});
	}, [])

	const session = supabase.auth.session()
	const [ user, setUser ] = useState(supabase.auth.user());

	//@ts-expect-error
	if(user.error && !documentSettings.settings.firstTime.value) {
		console.log(session.user.id);
		setDocumentSettings({
			...documentSettings,
			settings: {
				...documentSettings.settings,
				firstTime: {
					...documentSettings.settings.firstTime,
					value: true
				}
			}
		});
	}

	const [ todo, setTodo ] = useState(documentSettings.storage?.todo ? documentSettings.storage?.todo : []);
	const [ jottit, setJottit ] = useState(documentSettings.storage?.jottit);

	useEffect(() => {
		if(session)
			fetcher('/api/getUser', session.access_token).then(e => {
				setUser(e);
			});
		
		const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
			setUser(supabase.auth.user());
			console.log(supabase.auth.user());			
		});

		if(user && documentSettings.settings.firstTime.value) {
			console.log(`USR: ${user ? true : false} FT: ${documentSettings.settings.firstTime.value}`);

			setDocumentSettings({
				...documentSettings,
				settings: {
					...documentSettings.settings,
					firstTime: {
						...documentSettings.settings.firstTime,
						value: false
					}
				}
			})
		}	
	}, []);

	useEffect(() => {
		if(!process.browser) return;

		//@ts-expect-error
		const listener = new createListener();

		console.log("[SYSTEM]:\tAssigning Powerbinds");

		const escape = listener.subscribe('Escape', () => {
			if(documentSettings.states.searchOpen) {
				setDocumentSettings({
					...documentSettings,
					states: {
						...documentSettings.states,
						searchOpen: false
					}
				})
			}
			if(documentSettings.states.settingsOpen) {
				setDocumentSettings({
					...documentSettings,
					states: {
						...documentSettings.states,
						settingsOpen: false
					}
				})
			}
		});

		const resetState = listener.subscribe('Shift+Down', () => {
			setDocumentSettings(null);
			localStorage.removeItem("settings");
			localStorage.removeItem("todo");
			localStorage.removeItem("dynamic-images");
			localStorage.removeItem("last-changed");

			supabase.auth.signOut();
			window.location.reload();
		});

		listener.setMonitor((keyName, matched, originalEvent) => {
			documentSettings?.powertools?.powerbinds.map((powerbind: Binding) => {
				if(keyName == `shift+key${powerbind.bind}`) {
					console.log(`[POWERBINDS]: You pressed the ${powerbind.title} bind.`);
					console.log("[POWERBINDS]: Origional Event ", originalEvent);

					originalEvent.preventDefault();

					setDocumentSettings({ 
						...documentSettings, 
						states: { 
							...documentSettings.states, 
							searchOpen: true, 
							onSearchCompletion: powerbind 
						}
					});
				}
			});
			
		});

		setDocumentSettings({
			...documentSettings,
			states: {
				...documentSettings.states,
				assignedPowerbinds: true,
			}
		});

		console.log("[SYSTEM]:\tAssigned Powerbinds");
		
		return () => {
			listener.stopListening();
			
			escape.unsubscribe();
			resetState.unsubscribe();
		}
  	}, [, documentSettings.powertools.powerbinds]);

	useEffect(() => {
		localStorage.setItem("settings", JSON.stringify(documentSettings, (k,v) => typeof v === "function" ? "" + v : v));

		if(supabase.auth.user()?.aud == 'authenticated')
			saveSettings()
	}, [documentSettings.settings, documentSettings.powertools, documentSettings.storage]);

	useEffect(() => {
		console.log("[SET]:\tInitialising Storage")
		localStorage.setItem("todo", JSON.stringify(todo));
		localStorage.setItem("jottit", JSON.stringify(jottit));
		saveStorageItems();
	}, [todo, jottit])

	useEffect(() => {
		console.log('[THEME]:\t Loading Theme', documentSettings.settings.theme);

		loadTheme(documentSettings.settings.theme.value);
		seekChanges();
	}, []);

	useEffect(() => {
		console.log(`[THEME]:\t Background Image Changed ${documentSettings.settings.backgroundImage.value}`);
		
		switch(documentSettings.settings.backgroundImage.value) {
			case "color":
				sbs({ 
					backgroundColor: 'rgb(var(--wallpaper-color))'
				});
				break;
			case "dynamic":
				//fetch
				const rgb = theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors["--wallpaper-color"];
				const hex = RGBToHex(rgb);
				const result = ntc.name(hex)[3].toString().toLowerCase();

				const images = JSON.parse(localStorage.getItem('dynamic-images'));

				const backgrounds = images?.results?.filter(e => {
					const bg_color = ntc.name(e.color)[3].toString().toLowerCase();

					// console.log(`%cIMAGE COLOUR ~ ${ntc.name(e.color)} color: ${e.color} name: ${e.description}`, `color: ${e.color}`);
					return bg_color == result;
				});


				if(backgrounds) {
					if(backgroundStyle?.backgroundImage) {
						console.log(`[THEME]:\tTheme Changed, Wallpaper Exists ~ ${backgroundStats.color} comp ${hex}, verifying integrity... [${ntc.name(backgroundStats.color)[3].toString().toLowerCase()}~${result}]`)
						if(ntc.name(backgroundStats.color)[3].toString().toLowerCase() == result) return;
					}

					const random_index = Math.floor(Math.random() * backgrounds.length);
					console.log(`[THEME]:\t Background Search Filtered for ${result}::${random_index}`, backgrounds[random_index]);

					if(backgrounds[random_index]) {
						sbst(backgrounds[random_index]);
						sbs({ backgroundImage: `url(${backgrounds[random_index].urls.full})` });
					}
				}
				
				break;
			case "static":
				break;
					
		}
	}, [, documentSettings.settings.backgroundImage])

	const dom_style = 
		documentSettings.settings.backgroundType.value == "chaos" ?
		{
			...theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors,
			backgroundColor: "#000"
		}
		:
		documentSettings ? 
		{
			...theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors,
			...backgroundStyle
		}
		:
		{}

	return (
		<DocumentContext.Provider value={{ documentSettings, setDocumentSettings, saveSettings, userData, setUserData, todo, jottit, setJottit, setTodo, saveStorageItems, backgroundStats }}>
			<div className={styles.container} style={
				documentSettings.settings.backgroundType.value == "chaos" ?
				{
					...theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors,
					backgroundColor: "#000"
				}
				:
				documentSettings ? 
				{
					...theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors,
					...backgroundStyle
				}
				:
				{}
			}>	
				<Head>
					<title>New Tab</title>
					<link rel="icon" href="/favicon.ico" />	
				</Head>

				{
					documentSettings.settings.backgroundType.value == 'chaos' && 
					<div className={styles.background} >
						<Scene />
					</div>
				}

				<div className={styles.leftSide}>
					<div>
						{ (documentSettings.settings.showAds.value) && <div> <h3>AD</h3> </div> }
						{ (documentSettings.settings.quoteOfTheDay.value) && <QuoteOfTheDay /> }
					</div>

					<Clock />
				</div>

				<PowerTools />
				
				<div className={styles.rightSide}>
					<Todo />
					<Jottit />
				</div>
			
				{
					documentSettings.states.settingsOpen ?
					<div className={styles.settingsOverlay} id={"settingsBackground"}>
						<SettingsPage />
					</div>
					:
					<></>
				}

				{
					documentSettings.settings.firstTime.value ?
					<div className={styles.settingsOverlay}>
						<FirstTime />
					</div>
					:
					<></>
				}

				<Credit />
			</div>
		</DocumentContext.Provider>
	)
}

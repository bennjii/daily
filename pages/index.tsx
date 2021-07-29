
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
import { RGBToHex } from '@root/out/@types/themes'

import { ntc } from '@components/ntc'
import { Blurhash } from "react-blurhash";

import fetch from 'node-fetch';
global.fetch = fetch;

import { createApi } from 'unsplash-js'

const unSPLASH = createApi({ accessKey: "XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4" });

export default function Home() {
	const [ date, setDate ] = useState(new Date());
	const [ background, setBackground ] = useState(null);
	const [ quoteOfTheDay, setQuoteOfTheDay ] = useState(null);
	const [ userData, setUserData ] = useState<User>(null);

	const searchRef = useRef();

	if(!process.browser) return <></>;

	const color = "rgb(var(--clock-color))"; //`#${invert(background?.color ? background.color : '#000000')}`;
	
	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			supabase
				.from('users')
				.select('*')
				.eq('id', session.user.id)
				.then(usr => {
					setUserData(usr.data[0])
				})
		});
	}, [])

	const [ todo, setTodo ] = useState((process.browser) && localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [])
	const [ documentSettings, setDocumentSettings ] = useState<Document>(
		(process.browser) && localStorage.getItem("settings") ? 
		{
			...JSON.parse(localStorage.getItem("settings"), (k,v) => typeof v === "string" ? (v.startsWith('function') ? eval("(" + v + ")") : v): v ), // eval("("+v+")")
			states: {
				editingTitle: false,
				settingsOpen: false,
				searchOpen: false
			}
		}
		: 
		{
			states: {
				editingTitle: false,
				settingsOpen: false,
				searchOpen: false
			},
			settings: {
				title: {
					value: 'things to do',
					desc: 'Title of TODO List',
					type: "input"
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
							console.log(documentSettings.powertools.search_engine);

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
							console.log(`Recieved:: ${string}`);
		
							todo.push({
								editable: false,
								title: string,
								completed: false
							});
		
							localStorage.setItem("todo", JSON.stringify(todo));
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

	useEffect(() => {
		if(!process.browser) return;
		console.log("Updated!")
		
		//@ts-expect-error
		const listener = new createListener();
		listener.setMonitor(true);

		const escape = listener.subscribe('Escape', () => {
			console.log("ESCAPEEE");

			if(documentSettings.states.searchOpen) {
				documentSettings.states.searchOpen = false;
				setDocumentSettings(documentSettings);

				// setDocumentSettings({ ...documentSettings, states: { ...documentSettings.states, searchOpen: false, onSearchCompletion: null }});
			}
			if(documentSettings.states.settingsOpen) {
				documentSettings.states.settingsOpen = false;
				setDocumentSettings(documentSettings);

				// setDocumentSettings({ ...documentSettings, states: { ...documentSettings.states, settingsOpen: false }});
			}
		});

		const resetState = listener.subscribe('Shift+Down', () => {
			setDocumentSettings(null);
			localStorage.removeItem("settings");
			supabase.auth.signOut();

			window.location.reload();
		});

		documentSettings?.powertools?.powerbinds.map((powerbind: Binding) => {
			listener.subscribe(`Shift+key${powerbind.bind}`, () => {
				console.log(documentSettings.states);

				setDocumentSettings({ 
					...documentSettings, 
					states: { 
						...documentSettings.states, 
						searchOpen: true, 
						onSearchCompletion: powerbind 
					}
				});
			});
		});

		return () => {
			listener.stopListening();
		}
  	}, [, documentSettings.powertools.powerbinds]);

	useEffect(() => {
		console.log("Component Started");
		console.log(documentSettings);

		const repeat = () => {
			setDate(new Date());
			setTimeout(repeat, 100)
		}

		setTimeout(repeat, 100);

		// (async () => {
		// 	// api.unsplash.com/photo/_8zfgT9kS2g&client_id=XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4 - Single Photo (1538150) (1368747 - TXTURES) (1041983 - BG's)
		// 	// https://api.unsplash.com/photos/random/?collections=1368747&count=1&client_id=XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4
		// 	setBackground((await axios.get('https://api.unsplash.com/photos/aQcE3gDSSTY?client_id=XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4')).data);
		// 	documentSettings.settings.quoteOfTheDay.value ?? setQuoteOfTheDay((await (await axios.get('http://quotes.rest/qod.json')).data));
		// })();
	}, []);

	useEffect(() => {
		localStorage.setItem("settings", JSON.stringify(documentSettings, (k,v) => typeof v === "function" ? "" + v : v));
	}, [documentSettings])

	useEffect(() => {
		console.log('Loading Theme', documentSettings.settings.theme);

		loadTheme(documentSettings.settings.theme.value)
	}, []);

	const [ backgroundStyle, sbs ] = useState(null);
	const [ backgroundStats, sbst ] = useState(null);

	useEffect(() => {
		console.log("Background Image Changed.");
		
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

				// unSPLASH.search.getPhotos({
				// 	query: "a",
				// 	page: 1,
				// 	perPage: 5,
				// 	color: result,
				// 	collectionIds: ["j21FBkp0aoQ"]
				// }).then(e => {
				// 	console.log(e.response)
				// })

				const images = JSON.parse(localStorage.getItem('dynamic-images'));

				const backgrounds = images.results.filter(e => {
					const bg_color = ntc.name(e.color)[3].toString().toLowerCase();

					console.log(`%cIMAGE COLOUR ~ ${ntc.name(e.color)}`, `color: ${e.color}`);

					console.log("BG: ", e, " COMPUTE: ", bg_color);
					return bg_color == result;
				});

				const random_index = Math.floor(Math.random() * backgrounds.length);
				console.log(backgrounds)

				if(random_index) {
					sbst(backgrounds[random_index]);
					sbs({ backgroundImage: `url(${backgrounds[random_index].urls.full})` });
				}
				
				break;

				// return axios
				// 			.get(`https://api.unsplash.com/search/photos/?query=landscape&color=${result}&orientation=landscape&per_page=10&collections=j21FBkp0aoQ&client_id=XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4`)
				// 			.then(data => {
				// 				console.log(data);
				// 				console.log(data.data.results[Math.round((Math.random() * data.data.results.length - 1))]);
				// 				console.log(data.data.results.length)

				// 				sbst({
				// 					backgroundImage: data.data.results[Math.round((Math.random() * (data.data.results.length - 1)))]
				// 				})

				// 				sbs({
				// 					backgroundImage: `url(${data.data.results[Math.round((Math.random() * (data.data.results.length - 1)))].urls.regular})`
				// 				});
				// 			})
					
		}
	}, [, documentSettings])
		
	// TASK: IMPLEMENT BACKGROUNDS
	// SO THAT THE USER CAN CHOOSE BETWEEN:

	// - STATIC WALLPAPER (UPLOADED AND SAVED AS IMAGE BLOB)
	// - DYNAMIC WALLPAPER (CUSTOM FROM PRESET THEME OR DYNAMIC RANDOM FROM UNSPLASH API)
	// - COLOR WALLPAPER (STATIC COLOR OR FROM UNSPLASH API)

	// (documentSettings.settings.backgroundType.value == "chaos") ?
				// { 	
				// 	background: 'rgb(0, 0, 0)',
				// 	backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8voDgUhskLo%2Fmaxresdefault.jpg&f=1&nofb=1)',
				// 	backgroundColor: '#000',
				// 	...theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors
				// }
				// :
				// {
				// 	backgroundImage: `url(${background?.urls?.raw ? background.urls.raw : 'https://images.unsplash.com/photo-1617642171314-276bb7641536?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80'})`, 
				// 	backgroundRepeat: 'no-repeat', 
				// 	backgroundSize: 'cover',
				// 	...theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors
				// }

	// console.log({
	// 	...theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors,
	// 	...backgroundStyle?.then(e => e)
	// });

	return (
		<DocumentContext.Provider value={{ documentSettings, setDocumentSettings, userData, setUserData }}>
			<div className={styles.container} style={{
				...theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors,
				...backgroundStyle
			}}>
				{/* {
					backgroundStats?.backgroundImage ? 
					<div className={styles.backgroundBlur}>
						<Blurhash
							hash={backgroundStats.backgroundImage.blur_hash}
							width={window.innerWidth}
							height={window.innerHeight}
							resolutionX={64}
							resolutionY={64}
							punch={1}
							/>
					</div>
					
					:
					<></>
				} */}
				
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
						{
							(documentSettings.settings.showAds.value) 
							&&
							<div>
								<h3 style={{ color:  color }}>AD</h3>
							</div>
						}
						
						{
							(documentSettings.settings.quoteOfTheDay.value) && <QuoteOfTheDay qotd={quoteOfTheDay} color={color} />
						}
					</div>

					<div className={styles.time}>
						<h1 style={{ color:  color }}>
							{
								(documentSettings.settings.hour24.value) ?
								date.getHours() 
								:
								date.getHours() > 12 ? date.getHours()-12 : date.getHours() 
							}
							:
							{ 
								(date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes() 
							}
						</h1>

						<div>
							<p style={{ color: color }}>{date.toLocaleString('en-us', {  weekday: 'long', day: '2-digit', month: (documentSettings.settings.shortDate.value) ? 'short' : 'long' }).toUpperCase()}</p>

							<Settings color={"rgb(var(--clock-color))"} opacity={0.055} size={20} onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, settingsOpen: !documentSettings.states.settingsOpen } })}/>
						</div>
					</div>
				</div>

				{
					documentSettings.states.searchOpen ?
					<div className={`${styles.search} ${styles.searchActive}`} onClick={(e) => {
						console.log(e.target)
						//@ts-expect-error
						if(e.target.classList.value.includes(styles.search)) setDocumentSettings({ ...documentSettings, states: { ...documentSettings.states, searchOpen: false }})
					}}>
						<div>
							{/* <div className={styles.searchResults}>
								<div>
									<Plus size={15} color={"#3b3b3b"}/>
									<p>New Task</p>
								</div>
							</div> */}
							<div id={"search"} className={styles.searchDiv} onClick={() => {console.log("Event Sucked.")}}>
								<input placeholder={`${/* ↑ */"/"}${documentSettings.states.onSearchCompletion?.bind}\t${documentSettings.states.onSearchCompletion?.title}`} ref={searchRef} autoFocus onKeyDown={(event) => {
									if(event.key.toLocaleLowerCase() == "escape") {
										setDocumentSettings({ ...documentSettings, states: { ...documentSettings.states, searchOpen: false }})
									}else if(event.key.toLocaleLowerCase() == "enter") {
										//@ts-expect-error
										documentSettings.states.onSearchCompletion?.action(searchRef.current.value);
										//@ts-expect-error
										searchRef.current.value = '';
									}
								}}></input>

								{
									(() => {
										switch(documentSettings.states.onSearchCompletion?.title) {
											case 'search':
												return <ArrowRight size={15} color={"rgb(var(--primary-color))"} opacity={"0.7"}/>
											case 'task':
												return <Plus size={15} color={"rgb(var(--primary-color))"} opacity={"0.7"}/>
											default:
												return <ArrowRight size={15} color={"rgb(var(--primary-color))"} opacity={"0.7"}/>
										}
									})()
								}
							</div>
						</div>
					</div>
					:
					<div className={styles.search}></div>
				}
				
				<div className={styles.rightSide}>
					{
						(process.browser && documentSettings.settings.showToDo.value) ?
						<div>
							<div className={styles.todoHeader}>
								{
									documentSettings.states.editingTitle ?
									<input type="text" placeholder={documentSettings.settings.title.value} 
									onChange={(e) => setDocumentSettings({...documentSettings, settings: { ...documentSettings.settings, title: { ...documentSettings.settings.title, value: e.target.value } }})} 
									onKeyDown={(e) => {
										if(e.key == "Enter") setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingTitle: false } })
									}} autoFocus/>
									:
									<h2 onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingTitle: true } })}>{documentSettings.settings.title.value}</h2>
								}
							
								<Plus color={"rgb(var(--primary-color))"} size={20} strokeWidth={1.5} onClick={() => {
									todo.push({
										editable: true,
										title: '',
										completed: false
									})

									localStorage.setItem("todo", JSON.stringify(todo));
								}}/>
							</div>
							<div className={styles.todoBody}>
								{
									todo.map((e, index) => {
										return (
											<div key={`TODO${index}`} onClick={(e) => {
													//@ts-ignore
													if(e.target.nodeName == "DIV") {
													todo[index].completed = !todo[index].completed;
													localStorage.setItem("todo", JSON.stringify(todo));
													}
												}}>

												{
												(e.editable)
												?
												<div>
													<input type="text" defaultValue={e.title} placeholder={"Click to edit me"} onBlur={(e) => { 
														todo[index] = {
															editable: false,
															title: e.target.value,
															completed: false
														}
													}} onKeyDown={(e) => {
														if(e.key == "Enter") {
															todo[index] = {
															editable: false,
															//@ts-ignore
															title: e.target.value,
															completed: false
															}

															localStorage.setItem("todo", JSON.stringify(todo));
														}
													}} autoFocus/>
												</div>
												:
												<div 
													className={(e.completed) ? styles.completedTask : styles.uncompletedTask }
													style={{ backgroundColor: e.completed ? 
														`rgb(${getThemeColor(documentSettings.settings.theme.value, "--approval-color")?.split(',').map(e => (parseInt(e) < 255-150) ? parseInt(e) + 150 : 255 ).join(',')})`
														: 
														''  
													}}
												>
													<div className={styles.todoLabel}>
														<p onClick={() => {
															todo[index].editable = true
														}}>{e.title}</p>
													</div>

													<div>
													{
														(e.completed)
														?
														<Check color={(e.completed) ? "rgb(var(--approval-color))" : "rgb(var(--primary-color))"} size={20}  onClick={(e) => {
															todo[index].completed = false;
															localStorage.setItem("todo", JSON.stringify(todo));
														}}/>
														:
														<Square color={(e.completed) ? "rgb(var(--approval-color))" : "rgb(var(--primary-color))"} size={20} onClick={(e) => {
															todo[index].completed = true;
															localStorage.setItem("todo", JSON.stringify(todo));
														}}/>
													}
													</div>

													<Trash color={(e.completed) ? "rgb(var(--approval-color))" : "rgb(var(--primary-color))"} size={20} onClick={(e) => {
														todo.splice(index, 1);
														localStorage.setItem("todo", JSON.stringify(todo));
													}} onMouseOver={(e) => {
														//@ts-expect-error
														if(e.target.nodeName == 'path' || e.target.nodeName == 'polyline') {
															//@ts-expect-error
															e.target.parentElement.classList.add(styles.todoTrashHover)
														}else {
															//@ts-expect-error
															e.target.classList.add(styles.todoTrashHover)
														}
													}} onMouseLeave={(e) => {
														//@ts-expect-error
														if(e.target.nodeName == 'path' || e.target.nodeName == 'polyline') {
															//@ts-expect-error
															e.target.parentElement.classList.remove(styles.todoTrashHover)
														}else {
															//@ts-expect-error
															e.target.classList.remove(styles.todoTrashHover)
														}
													}}/>
												</div> 
												}
											</div>
										)
									})
								}
							</div>
						</div> 
						:
						<></>
					}
				</div>
			
				{
					documentSettings.states.settingsOpen ?
					<div className={styles.settingsOverlay} id={"settingsBackground"} onClick={(e) => {
						// // @ts-expect-error
						// if(e.target.id == 'settingsBackground') setDocumentSettings({...documentSettings, states: { ...documentSettings.states, settingsOpen: !documentSettings.states.settingsOpen } })
					}}>
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
			
				<div className={styles.photoCredit}>
					{
						documentSettings.settings.backgroundType.value == 'standard' ?
						<h6 style={{ color, fontWeight: 100, fontSize: '12px' }}>
							<p>Photo by</p>
							<a href={`https://unsplash.com/@${backgroundStats?.user?.username}`}>{backgroundStats?.user?.name} {backgroundStats?.user?.lastName}</a>
						</h6>
						:
						<h6 style={{ color, fontWeight: 100, fontSize: '12px' }}>
							<p>Lorenz Chaos Attractor</p>
						</h6>
					}
					
				</div>
			</div>
		</DocumentContext.Provider>
	)
}

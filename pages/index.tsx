
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

import { useEffect, useState } from 'react'
import invert from '../public/invert'

import SettingsMenu from '../public/components/settings'

import { Box, Check, Eye, Plus, Settings, Square, Trash, X } from 'react-feather'
import { toUnicode } from 'node:punycode'

export default function Home() {
  const [ date, setDate ] = useState(new Date());
  const [ background, setBackground ] = useState(null);
  const [ quoteOfTheDay, setQuoteOfTheDay ] = useState(null);

  const color = "#ffffff"; //`#${invert(background?.color ? background.color : '#000000')}`;
  
  const [ todo, setTodo ] = useState((process.browser) && localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [])
  const [ documentSettings, setDocumentSettings ] = useState((process.browser) && localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings")) : {
	states: {
	  editingTitle: false,
	  settingsOpen: false,
	},
	settings: {
	  title: 'things to do',
	  showToDo: true,
	  showAds: false,
	  hour24: false,
	  shortDate: false,
	  quoteOfTheDay: false
	}
  });

  useEffect(() => {
	console.log("Component Started");

	const repeat = () => {
	  setDate(new Date());
	  setTimeout(repeat, 100)
	}

	setTimeout(repeat, 100);

	(async () => {
		
	  // api.unsplash.com/photo/_8zfgT9kS2g&client_id=XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4 - Single Photo (1538150) (1368747 - TXTURES) (1041983 - BG's)
	  // https://api.unsplash.com/photos/random/?collections=1368747&count=1&client_id=XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4
	  setBackground((await axios.get('https://api.unsplash.com/photos/aQcE3gDSSTY?client_id=XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4')).data);
	  documentSettings.settings.quoteofTheDay ?? setQuoteOfTheDay((await (await axios.get('http://quotes.rest/qod.json')).data));
	})();
  }, []);

  useEffect(() => {
	localStorage.setItem("settings", JSON.stringify(documentSettings));
	console.log("Settings Updated")
  }, [documentSettings])

  return (
	<div className={styles.container} style={{ backgroundImage: `url(${background?.urls?.raw ? background.urls.raw : 'https://images.unsplash.com/photo-1617642171314-276bb7641536?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
		<Head>
			<title>New Tab</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className={styles.leftSide}>
			<div>
				<div hidden={!documentSettings.settings.showAds}>
					<h3 style={{ color:  color }}>AD</h3>
				</div>
				
				<div hidden={!documentSettings.settings.quoteOfTheDay}>
					<h3 style={{ color:  color, fontWeight: 100 }}>{quoteOfTheDay?.contents?.quotes[0]?.quote}</h3>
					<h4 style={{ color:  color, fontWeight: 400 }}>{quoteOfTheDay?.contents?.quotes[0]?.author}</h4>
				</div>
			</div>

			<div className={styles.time}>
				<h1 style={{ color:  color }}>{date.getHours() > 12 ? date.getHours()-12 : date.getHours() }:{ (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes() }</h1>

				<div>
					<p style={{ color: color }}>{date.toLocaleString('en-us', {  weekday: 'long', day: '2-digit', month: 'long' }).toUpperCase()}</p>

					<Settings color={"#f4f4f40e"} size={20} onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, settingsOpen: !documentSettings.states.settingsOpen } })}/>
				</div>
			</div>
		</div>

	  	<div className={styles.rightSide} hidden={!documentSettings.settings.showToDo}>
			<div className={styles.toDo}>
				<div className={styles.todoHeader}>
					{
						documentSettings.settings.editingTitle ?
						<input type="text" placeholder={documentSettings.settings.title} 
						onChange={(e) => setDocumentSettings({...documentSettings, title: e.target.value })} 
						onKeyDown={(e) => {
							if(e.key == "Enter") setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingTitle: false } })
						}} autoFocus/>
						:
						<h2 onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingTitle: true } })}>{documentSettings.settings.title}</h2>
					}
				
					<Plus color={"#000000"} size={20} strokeWidth={1.5} onClick={() => {
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
									<div className={(e.completed) ? styles.completedTask : styles.uncompletedTask }>
										<div className={styles.todoLabel}>
											<p onClick={() => {
												todo[index].editable = true
											}}>{e.title}</p>
										</div>

										<div>
										{
											(e.completed)
											?
											<Check color={(e.completed) ? "#226d38" : "#3b3b3b"} size={20}  onClick={(e) => {
												todo[index].completed = false;
												localStorage.setItem("todo", JSON.stringify(todo));
											}}/>
											:
											<Square color={(e.completed) ? "#226d38" : "#3b3b3b"} size={20} onClick={(e) => {
												todo[index].completed = true;
												localStorage.setItem("todo", JSON.stringify(todo));
											}}/>
										}
										</div>

										<Trash color={(e.completed) ? "#226d38" : "#3b3b3b"} size={20} onClick={(e) => {
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
	  	</div>
	  
		{
			documentSettings.states.settingsOpen ?
			<div className={styles.settingsOverlay} id={"settingsBackground"} onClick={(e) => {
				//@ts-expect-error
				if(e.target.id == 'settingsBackground') setDocumentSettings({...documentSettings, states: { ...documentSettings.states, settingsOpen: !documentSettings.states.settingsOpen } })
			}}>
				<div>
					<div className={styles.settingsHeader}>
						<h2>settings</h2>

						<X color={"#3b3b3b"} size={20} onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, settingsOpen: false } })}/>
					</div>

					<div className={styles.settingsBody}>
						<SettingsMenu settings={documentSettings} callback={setDocumentSettings}/>
					</div>
				</div>
			</div>
			:
			<></>
		}
	  
		<div className={styles.photoCredit}>
			<p style={{ color, fontWeight: 100, fontSize: '12px' }}>
				<p>Photo by</p>
				<a href={`https://unsplash.com/@${background?.user?.username}`}>{background?.user?.name} {background?.user?.lastName}</a>
			</p>
		</div>
	  {
	  /* 
	  <input type="text" placeholder={"Search"} onKeyDown={(e) => {
		console.log(e);

		if(e.key == "Enter") {
		  window.location.replace(`https://duckduckgo.com/?q=${e.target.value}`);
		}
	  }}/> 
	  */
	  }
	</div>
  )
}

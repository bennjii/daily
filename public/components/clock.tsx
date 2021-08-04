import { useContext, useEffect, useState } from 'react';
import { Box, Check, Settings, Square } from 'react-feather'
import styles from '@styles/Home.module.css'
import { DocumentContext } from '@public/@types/document_context';

export default function Clock() {
    const { documentSettings, setDocumentSettings } = useContext(DocumentContext);
    const color = "rgb(var(--clock-color))";
    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
		const repeat = () => {
			setDate(new Date());
			setTimeout(repeat, 100)
		}

		setTimeout(repeat, 100);
	}, []);

    return (
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

                <Settings color={"rgb(var(--clock-color))"} opacity={0.45} size={20} onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, settingsOpen: !documentSettings.states.settingsOpen } })}/>
            </div>
        </div>
    )
}
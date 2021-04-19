import { Box, Check, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'

export default function Settings(props) {
    const documentSettings = props.settings;
    const callback = props.callback;

    return (
        <div>
            {
                Object.keys(documentSettings.settings).map((e, index) => {
                    if(e == 'title') return;

                    return (
                        <div className={styles.settingsItem}>
                            <p>{e}</p>
                            
                            {
                                <div onClick={() => {
                                    documentSettings.settings[e] = !documentSettings.settings[e];
                                    callback(documentSettings);
                                }}>
                                    { documentSettings.settings[e] ? <Check/> : <Square /> }
                                </div>
                                
                            }
                        </div>
                    )
                    
                })
            }
        </div>
    )
}
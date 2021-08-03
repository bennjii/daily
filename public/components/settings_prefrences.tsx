import { Box, Check, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'

export default function Prefrences(props) {
    const documentSettings = props.settings;
    const callback = props.callback;

    const parse = (string) => {
        return string.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5');
    }

    return (
        <div>
            <h1>Preferences</h1>
            <p>Choose how to customise your tab</p>
            <br />

            <h4>Avalible Preferences</h4>

            <div className={styles.prefrencesList}>
                {
                    Object.keys(documentSettings.settings).map((e, index) => {
                        if(e == 'title') return;

                        let list_options;
                        let list_index;

                        if(documentSettings.settings[e].type.includes("list")) {
                            list_options = documentSettings.settings[e].type.replace('list', '').replace(/\[/g,'').replace(/\]/g, '').split(',')
                            list_index = list_options.findIndex((__) => __ == documentSettings.settings[e].value);
                        }

                        return (
                            documentSettings.settings[e].type != "invisible" ?
                            <div className={styles.settingsItem} key={`PREF-${index}`}>
                                <p>{parse(e)}</p>

                                <h6>{documentSettings.settings[e].desc}</h6>
                                
                                {   
                                    (documentSettings.settings[e].type == 'toggle') ?
                                        // Toggle Type
                                        <div onClick={() => {
                                            callback({
                                                ...documentSettings,
                                                settings: {
                                                    ...documentSettings.settings,
                                                    [e]: {
                                                        ...documentSettings.settings[e],
                                                        value: !documentSettings.settings[e].value
                                                    }
                                                }
                                            })
                                            // documentSettings.settings[e].value = !documentSettings.settings[e].value;
                                            // callback(documentSettings);
                                        }}>
                                            { documentSettings.settings[e].value ? <Check/> : <Square /> }
                                        </div>
                                    :
                                        // List Type
                                        <div onClick={() => {
                                            callback({
                                                ...documentSettings,
                                                settings: {
                                                    ...documentSettings.settings,
                                                    [e]: {
                                                        ...documentSettings.settings[e],
                                                        value: (list_options[list_index >= list_options.length-1 ? 0 : list_index+1]).trim()
                                                    }
                                                }
                                            })
                                            // documentSettings.settings[e].value = (list_options[list_index >= list_options.length-1 ? 0 : list_index+1]).trim();
                                            // callback(documentSettings);
                                        }}>
                                            { documentSettings.settings[e].value  }
                                        </div>
                                }
                            </div>
                            :
                            <></>
                        )
                        
                    })
                }
            </div>      
        </div>
    )
}
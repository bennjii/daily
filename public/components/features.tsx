import { DocumentContext } from '@public/@types/document_context';
import { supabase } from '@root/client';
import { useContext } from 'react';
import { Box, Check, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'
import Button from './button';

import { theme_list } from '@public/@types/themes';

export default function Features({ callback }) {
    const parse = (string) => {
        return string.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5');
    }

    const { documentSettings, setDocumentSettings } = useContext(DocumentContext);

    return (
        <div className={styles.welcomePage}>
            <h1>This is daily</h1>
            <p>Learn about how to maximise its potential</p>
            <br />

            <p>Choose a theme</p>
            <div className={styles.themeList}>
                {
                    theme_list.map(theme => {
                        if(theme.name.includes("custom")) return;

                        return (
                            <div 
                                key={`THEME-${theme.name}`}
                                className={`${styles.themeIcon}`} 
                                style={{ ...theme.colors }}
                                onClick={() => {
                                    setDocumentSettings({
                                        ...documentSettings,
                                        settings: {
                                            ...documentSettings.settings,
                                            theme: {
                                                ...documentSettings.settings.theme,
                                                value: theme.name
                                            }
                                        }
                                    });

                                    // documentSettings.settings.theme.value = theme.name;
                                    // callback(documentSettings);

                                    // documentSettings.settings.theme.value = theme.name;
                                    // callback(documentSettings);
                                }}
                            >
                                {
                                    documentSettings.settings.theme.value == theme.name ? 
                                    <div className={styles.themeActive}></div>
                                    : 
                                    <div></div>
                                }

                                {theme.name}
                            </div>
                        )
                    })
                }
            </div>

            <p>Powerbinds</p>
            <div>
                <p>Using the SHIFT prefix, followed by any assigned letter ~ run a custom function, search or task right from inside daily.</p>
            </div>
            
            <Button title={"Continue"} onClick={() => {
                callback("all-set")
            }}/>
        </div>
    )
}
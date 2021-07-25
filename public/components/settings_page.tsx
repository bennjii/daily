import { DocumentContext } from '@public/@types/document_context';
import { openInNewTab } from '@public/@types/new_tab';
import { act } from '@react-three/fiber';
import { useContext, useState } from 'react';
import { AtSign, Box, Check, ChevronsRight, Gift, GitHub, Link, Moon, Square, ToggleLeft, X } from 'react-feather'
import styles from '../../styles/Home.module.css'
import Accounts from './settings_accounts';
import Bindings from './settings_bindings';
import Prefrences from './settings_prefrences'

export default function SettingsPage() {
    const [ activePannel, setActivePannel ] = useState('prefrences'); // prefrences, bindings, accounts
    const { documentSettings, setDocumentSettings } = useContext(DocumentContext);

    return (
        
        <div>
            <div className={styles.settingsToggle}>
                <div></div>
                <div className={styles.settingsToggleList}>
                    <div 
                        className={activePannel == 'prefrences' ? styles.settingsActivePannel : ''}
                        onClick={() => setActivePannel('prefrences')}
                    >
                        <ChevronsRight size={18} color={activePannel == 'prefrences' ? "var(--complementary-color)" : "var(--primary-color)"} />
                    </div>

                    <div 
                        className={activePannel == 'bindings' ? styles.settingsActivePannel : ''}
                        onClick={() => setActivePannel('bindings')}
                    >
                        <Link size={18} color={activePannel == 'bindings' ? "var(--complementary-color)" : "var(--primary-color)"}/>

                        <div className={styles.new}>new</div>
                    </div>
                    
                    <div 
                        className={activePannel == 'accounts' ? styles.settingsActivePannel : ''}
                        onClick={() => setActivePannel('accounts')}
                    >
                        <AtSign size={18} color={activePannel == 'accounts' ? "var(--complementary-color)" : "var(--primary-color)"} />
                    </div>

                    <div 
                        className={activePannel == 'theme' ? styles.settingsActivePannel : ''}
                        onClick={() => setActivePannel('theme')}
                    >
                        <Moon size={18} color={activePannel == 'theme' ? "var(--complementary-color)" : "var(--primary-color)"} />
                    </div>
                </div>
                <div>
                    <div className={styles.logo} onClick={() => {
                        openInNewTab('https://github.com/UnRealReincarlution/daily')
                    }}><GitHub size={13} color={"#fff"}/></div>
                    daily
                </div>
            </div>

            <div className={styles.settingsHeader}>
                <h2>settings - {activePannel}</h2>

                <div className={styles.settingsActivePannel}>
                    <X color={"var(--complementary-color)"} size={18} onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, settingsOpen: false } })}/>
                </div>
            </div>

            <div className={styles.settingsBody}>
                {
                    (() => {
                        switch(activePannel) {
                            case "prefrences":
                                return <Prefrences settings={documentSettings} callback={setDocumentSettings}/>
                            case "bindings":
                                return <Bindings settings={documentSettings} callback={setDocumentSettings}/>
                            case "accounts":
                                return <Accounts />
                            default: 
                                return <div>
                                    <p><i>Something went wrong :(</i></p>
                                </div>
                        }
                    })()
                }
                
            </div>
        </div>
    )
}
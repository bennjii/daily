import { DocumentContext } from '@public/@types/document_context';
import { openInNewTab } from '@public/@types/new_tab';
import { act } from '@react-three/fiber';
import { supabase } from '@root/client';
import { useContext, useEffect, useState } from 'react';
import { AtSign, Box, Check, ChevronsRight, Gift, GitHub, Link, Moon, Square, ToggleLeft, X } from 'react-feather'
import styles from '../../styles/Home.module.css'
import AllSet from './all-set';
import Auth from './auth';
import Features from './features';
import Accounts from './settings_accounts';
import Bindings from './settings_bindings';
import Prefrences from './settings_prefrences'
import Welcome from './welcome';

import { createApi } from 'unsplash-js'
import { ntc } from './ntc';
const unSPLASH = createApi({ accessKey: "XYUczbGx7fY_eoE1Dwt1KpM04hIRtwTv8lLaiSkN8p4" });

export default function FirstTime() {
    const [ activePannel, setActivePannel ] = useState('start'); // prefrences, bindings, accounts
    const { documentSettings, setDocumentSettings, userData } = useContext(DocumentContext);

    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        if(activePannel == 'auth' || activePannel == 'features' || activePannel == 'finish') {
            if(!loaded) {
                console.log("Performing First Time Settup and Optimisations...");

                unSPLASH
                    .collections
                    .getPhotos({ 
                        collectionId: 'j21FBkp0aoQ',
                        perPage: 50
                    }).then(data => {
                        localStorage.setItem('dynamic-images', JSON.stringify(data.response));
                        setLoaded(true);
                    })
            }
            
        }
    }, [activePannel])

    useEffect(() => {
        if(activePannel == 'finish') {
            // documentSettings.settings.firstTime.value = false;
            setDocumentSettings({
                ...documentSettings,
                settings: {
                    ...documentSettings.settings,
                    firstTime: {
                        ...documentSettings.settings.firstTime,
                        value: false
                    }
                }
            });

            console.log(documentSettings);
            console.log(`[SYSTEM]: \tFirst Time Settup Complete.`);

            localStorage.setItem("settings", JSON.stringify(documentSettings, (k,v) => typeof v === "function" ? "" + v : v));
        }
    }, [activePannel])

    useEffect(() => {
        if(userData?.username) {
            setActivePannel('features')
        }
    }, [, userData])

    useEffect(() => {
        console.log("Optimised Content Loaded")
    }, [loaded])

    return (
        <div>
            <div className={styles.settingsToggle}>
                <div></div>
                <div className={styles.settingsToggleList}>
                    
                </div>
                <div>
                    <div className={styles.logo} onClick={() => {
                        openInNewTab('https://github.com/UnRealReincarlution/daily')
                    }}><GitHub size={13} color={"rgb(var(--complementary-color))"}/></div>
                    daily
                </div>
            </div>

            <div className={styles.settingsBody}>
                {
                    (() => {
                        switch(activePannel) {
                            case "start":
                                return <Welcome callback={setActivePannel}/>
                            case "auth":
                                return <Auth callback={setActivePannel}/>
                            case "features":
                                return <Features callback={setActivePannel}/>
                            case "all-set":
                                return <AllSet callback={setActivePannel} activatable={loaded}/>
                            default: 
                                return (
                                    <div>
                                        <p><i>Something went wrong :(</i></p>
                                    </div>
                                )
                        }
                    })()
                }
                
            </div>
        </div>
    )
}
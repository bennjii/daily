import { DocumentContextType } from '@public/@types/document';
import { DocumentContext } from '@public/@types/document_context'
import { truncate } from 'node:fs';
import { useContext, useRef, useState } from 'react'
import { Box, Check, Code, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'

export default function Bindings(props) {
    const documentSettings = props.settings;
    const callback = props.callback;

    const key_ref = useRef<HTMLInputElement>();

    const [ keybindSetter, setKeybindSetter ] = useState({
        open: false,
        ref: null,
        key: null
    });

    const [ customFunction, setCustomFunction ] = useState({
        value: null,
        ref: null,
        open: false
    });

    return (
        <div style={{ position: 'relative' }}>
            {
                keybindSetter.open ?
                <div className={styles.keyOverlay} id={"keyBackground"} onClick={(e) => {
                    //@ts-expect-error
                    if(e.target.id == 'keyBackground') {
                        setKeybindSetter({
                            open: false,
                            ref: null,
                            key: null
                        });
                    }
                }}>
                    <div>
                        <h4>Set keybind for <b>{keybindSetter.ref.title}</b></h4>
                        <p>Rebinding might only take effect on refresh</p>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                            Current Keybind: 
                            <div
                                    className={styles.settingsActivePannel}
                                >
                                <p>
                                    { keybindSetter.ref.bind }
                                </p>
                            </div>
                        </div>

                        {/* <p>Note, all keybinds are prefaced by <b>Shift</b></p> */}
                        <input 
                            type="text" 
                            autoFocus 
                            placeholder={"Listening..."} 
                            ref={key_ref}
                            onChange={(e) => {
                                key_ref?.current?.blur();
                                key_ref.current.disabled = true;

                                const new_binding = e.target.value;

                                const exists = documentSettings.powertools.powerbinds.filter(e => e.bind == new_binding);
                                
                                if(exists.length > 0) {
                                    console.log("Keybind Already Exists");
                                }else {
                                    console.log("Remapping...");
                                    // const index = documentSettings.powertools.powerbinds.findIndex(e => e.bind == keybindSetter.ref.bind);

                                    // documentSettings.powertools.powerbinds[index].bind = new_binding;
                                    // callback(documentSettings);

                                    callback({
                                        ...documentSettings,
                                        powertools: {
                                            ...documentSettings.powertools,
                                            powerbinds: [
                                                ...documentSettings.powertools.powerbinds.filter(e => e.bind !== keybindSetter.ref.bind),
                                                {
                                                    ...keybindSetter.ref,
                                                    bind: new_binding
                                                }
                                            ]
                                        }
                                    })
                                }
                            }}
                        />
                    </div>
                </div>
                :
                <></>
            }

            {
                customFunction.open ?
                <div className={styles.keyOverlay} id={"keyBackground"} onClick={(e) => {
                    //@ts-expect-error
                    if(e.target.id == 'keyBackground') {
                        setCustomFunction({
                            value: null,
                            ref: null,
                            open: false
                        });
                    }
                }}>
                    <div  style={{ width: '80%' }}>
                        <h4>Custom function for  <b>{customFunction.ref.title}</b></h4>
                        <p>Your function will be fed the string result from input completion</p>
                        <br />

                        {/* <p>Note, all keybinds are prefaced by <b>Shift</b></p> */}
                        <textarea 
                            autoFocus 
                            rows={15}
                            placeholder={"function action(string) {}"}
                            defaultValue={"" + customFunction.ref.action} 
                            onChange={(e) => {
                                setCustomFunction({
                                    ...customFunction,
                                    value: e.target.value
                                })
                            }}
                        />
                        

                    </div>
                </div>
                :
                <></>
            }
            <h1>Bindings</h1>
            <p>Powerbinds - A smart and quick way to easily navigate and use daily, or execute custom functions!</p>
            <br />

            <div className={styles.searchEngine}>
                <h4>Default Search Engine</h4>

                <div>
                    <div 
                        className={documentSettings.powertools.search_engine == 'duckduckgo' ? styles.activePannel : undefined} 
                        onClick={() => {
                            documentSettings.powertools.search_engine = 'duckduckgo';
                            callback(documentSettings);
                        }}
                    >
                        DuckDuckGo
                    </div>

                    <div 
                        className={documentSettings.powertools.search_engine == 'google' ? styles.activePannel : undefined} 
                        onClick={() => {
                            documentSettings.powertools.search_engine = 'google';
                            callback(documentSettings);
                        }}
                    >
                        Google
                    </div>

                    <div 
                        className={documentSettings.powertools.search_engine == 'escosia' ? styles.activePannel : undefined} 
                        onClick={() => {
                            documentSettings.powertools.search_engine = 'escosia';
                            callback(documentSettings);
                        }}
                    >
                        Escosia
                    </div>
                </div>
            </div>

            {/* <hr /> */}

            <h4>{documentSettings.powertools.powerbinds.length} Binds</h4>
            <div className={styles.powerBindList}>
                {
                    documentSettings.powertools.powerbinds.map(powerbind => {
                        return (
                            <div className={styles.powerBindListElement} key={`POWERBIND-${powerbind.title}`}>
                                <div
                                    className={styles.settingsActivePannel}
                                    onClick={() => {
                                        setKeybindSetter({
                                            open: true,
                                            ref: powerbind,
                                            key: powerbind.key
                                        })
                                    }}
                                >
                                    <p>
                                        { powerbind.bind }
                                    </p>
                                </div>
                                
                                {
                                    powerbind.title
                                }

                                <h6>
                                    {
                                        powerbind.desc
                                    }
                                </h6>

                                <div 
                                    className={styles.settingsActivePannel}
                                    onClick={() => {
                                        setCustomFunction({ 
                                            open: true,
                                            ref: powerbind,
                                            value: "" + powerbind.action
                                        })
                                    }}
                                >
                                    <Code size={18} color={"rgb(var(--complementary-color))"} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
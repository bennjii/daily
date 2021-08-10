import React, { useContext, useEffect, useRef, useState } from 'react';
import { ArrowRight, Box, Check, Plus, Settings, Square } from 'react-feather'
import styles from '@styles/Home.module.css'
import { DocumentContext } from '@public/@types/document_context';

const PowerTools: React.FC<{}> = () =>  {
    const { documentSettings, setDocumentSettings, todo, setTodo } = useContext(DocumentContext);
    const searchRef = useRef();

    useEffect(() => {
        console.log(`[POWERTOOLS]:\tOpened...`, todo)
    }, [documentSettings.states.searchOpen])

    return (
        <>
            {
                documentSettings.states.searchOpen ?
                <div className={`${styles.search} ${styles.searchActive}`} onClick={(e) => {
                    //@ts-expect-error
                    if(e.target.classList.value.includes(styles.search)) setDocumentSettings({ ...documentSettings, states: { ...documentSettings.states, searchOpen: false }})
                }}>
                    <div>
                        <div id={"search"} className={styles.searchDiv}>
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
        </>
    )
}

export default PowerTools 
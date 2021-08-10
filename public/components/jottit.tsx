import { useContext, useEffect, useState } from 'react';
import { Box, Check, Plus, Settings, Square } from 'react-feather'
import styles from '@styles/Home.module.css'
import { DocumentContext } from '@public/@types/document_context';

const Jottit: React.FC<{}> = () =>  {
    const { documentSettings, setDocumentSettings, jottit, setJottit, saveStorageItems } = useContext(DocumentContext);
    const [ activeJott, setActiveJott ] = useState(jottit[documentSettings.states.activeJott]);

    useEffect(() => {
        localStorage.setItem("jottit", JSON.stringify(jottit));
        saveStorageItems();
    }, [activeJott])

    return (
        <>
        {
            documentSettings.settings.jottit.value ?
            <div>
                    <div className={styles.jottHeader}>
                        <div className={styles.jottList}>
                            {
                                jottit.map((jot, index) => {
                                    if(index == documentSettings.states.activeJott) {
                                        return (
                                            <div className={styles.activeJott}>
                                                {
                                                    documentSettings.states.editingJottTitle ?
                                                    <input type="text" placeholder={jot.title} 
                                                    onChange={(event) => 
                                                        setJottit(jottit.map((e, i) => {
                                                            if(i == index) {
                                                                return { ...e, title: event.target.value };
                                                            }else {
                                                                return e;
                                                            }
                                                        }))
                                                    } 
                                                    onKeyDown={(e) => {
                                                        if(e.key == "Enter") setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingJottTitle: false } })
                                                    }}
                                                    onBlur={(e) => {
                                                        setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingJottTitle: false } })
                                                    }} autoFocus/>
                                                    :
                                                    <h2 onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingJottTitle: true } })}>{jot.title}</h2>
                                                }
                                            </div>
                                        )
                                    }else {
                                        return (
                                            <div 
                                                className={styles.innactiveJott} 
                                                onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, activeJott: index } })}
                                            >
                                                <h2 >{jot.title}</h2>
                                            </div>
                                        )
                                    }  
                                })
                            }
                        </div>
                        
                        <Plus color={"rgb(var(--primary-color))"} size={20} strokeWidth={1.5} onClick={() => {
                            setJottit([
                                ...jottit,
                                {
                                    title: 'My Jot',
                                    content: 'Begin Typing here'
                                }
                            ])

                            localStorage.setItem("jottit", JSON.stringify(jottit));
                            saveStorageItems();
                        }}/>
                    </div>
                    <div className={styles.jottBody}>	
                        <div 
                            contentEditable 
                            defaultValue={activeJott.content}
                            onChange={(e) => //@ts-expect-error
                                    setActiveJott({ ...activeJott, content: e.target.value  })}
                            >
                            {
                                activeJott.content
                            }
                        </div>
                    </div>
                </div> 
            :
            <></>
        }
        </>
    )
}

export default Jottit;
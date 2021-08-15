import React, { useContext, useEffect, useRef, useState } from 'react';
import { ArrowRight, Box, Check, Plus, Settings, Square, Trash } from 'react-feather'
import styles from '@styles/Home.module.css'
import { DocumentContext } from '@public/@types/document_context';
import { getThemeColor } from '@public/@types/themes';

const Todo: React.FC<{}> = () =>  {
    const { documentSettings, setDocumentSettings, todo, setTodo, saveStorageItems } = useContext(DocumentContext);
    
    return (
        <>
            {
                (process.browser && documentSettings.settings.showToDo.value) ?
                <div style={{ display: 'flex', flexDirection: "column", flex: 1, height: '100%' }}>
                    <div className={`${styles.todoHeader} .grid-item__title`}>
                        {
                            documentSettings.states.editingTitle ?
                            <input 
                                type="text" 
                                placeholder={documentSettings.settings.title.value} 
                                onChange={(e) => setDocumentSettings({...documentSettings, settings: { ...documentSettings.settings, title: { ...documentSettings.settings.title, value: e.target.value } }})} 
                                onKeyDown={(e) => {
                                    if(e.key == "Enter") setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingTitle: false } })
                                }} 
                                onBlur={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingTitle: false } })}
                                autoFocus
                            />
                            :
                            <h2 onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingTitle: true } })}>{documentSettings.settings.title.value}</h2>
                        }
                    
                        <Plus color={"rgb(var(--primary-color))"} size={20} strokeWidth={1.5} onClick={() => {
                            setTodo([
                                ...todo,
                                {
                                    editable: true,
                                    title: '',
                                    completed: false
                                }
                            ])

                            localStorage.setItem("todo", JSON.stringify(todo));
                            saveStorageItems();
                        }}/>
                    </div>
                    <div className={styles.todoBody}>	
                        {
                            todo?.map((e, index) => {
                                return (
                                    <div key={`TODO${index}`} onClick={(e) => {
                                            //@ts-ignore
                                            if(e.target.nodeName == "DIV") {	
                                                const indexed = todo.map((e, i) => {
                                                    if(index == i) return { ...e, completed: !e.completed }
                                                    else return e
                                                });

                                                setTodo(indexed);
                                                localStorage.setItem("todo", JSON.stringify(todo));
                                                saveStorageItems();
                                            }
                                        }}>

                                        {
                                        (e.editable)
                                        ?
                                        <div>
                                            <input type="text" defaultValue={e.title} placeholder={"Click to edit me"} onBlur={(e) => { 
                                                const indexed = todo.map((__e, i) => {
                                                    if(index == i) return { ...__e, title: e.target.value, editable: false }
                                                    else return __e
                                                });

                                                setTodo(indexed);
                                            }} onKeyDown={(e) => {
                                                if(e.key == "Enter") {
                                                    const indexed = todo.map((__e, i) => {
                                                        if(index == i) return { 
                                                            ...__e, 
                                                            //@ts-ignore
                                                            title: e.target.value, 
                                                            editable: false
                                                        }
                                                            else return __e
                                                    });

                                                    setTodo(indexed);
                                                    localStorage.setItem("todo", JSON.stringify(todo));
                                                    saveStorageItems();
                                                }
                                            }} autoFocus/>
                                        </div>
                                        :
                                        <div 
                                            className={(e.completed) ? styles.completedTask : styles.uncompletedTask }
                                            style={{ backgroundColor: e.completed ? 
                                                `rgb(${getThemeColor(documentSettings.settings.theme.value, "--approval-color")?.split(',').map(e => (parseInt(e) < 255-150) ? parseInt(e) + 150 : 255 ).join(',')})`
                                                : 
                                                ''  
                                            }}
                                        >
                                            <div className={styles.todoLabel}>
                                                <p onClick={() => {
                                                    const indexed = todo.map((e, i) => {
                                                        if(index == i) return { ...e, editable: true }
                                                            else return e
                                                    });

                                                    setTodo(indexed);
                                                }}>{e.title}</p>
                                            </div>

                                            <div>
                                            {
                                                (e.completed)
                                                ?
                                                <Check color={(e.completed) ? "rgb(var(--approval-color))" : "rgb(var(--primary-color))"} size={20}  onClick={(e) => {
                                                    const indexed = todo.map((e, i) => {
                                                        if(index == i) return { ...e, completed: !e.completed }
                                                        else return e
                                                    });
    
                                                    setTodo(indexed);
                                                    localStorage.setItem("todo", JSON.stringify(todo));
                                                    saveStorageItems();
                                                }}/>
                                                :
                                                <Square color={(e.completed) ? "rgb(var(--approval-color))" : "rgb(var(--primary-color))"} size={20} onClick={(e) => {
                                                    const indexed = todo.map((e, i) => {
                                                        if(index == i) return { ...e, completed: !e.completed }
                                                        else return e
                                                    });
    
                                                    setTodo(indexed);
                                                    localStorage.setItem("todo", JSON.stringify(todo));
                                                    saveStorageItems();
                                                }}/>
                                            }
                                            </div>

                                            <Trash color={(e.completed) ? "rgb(var(--approval-color))" : "rgb(var(--primary-color))"} size={20} onClick={(e) => {
                                                setTodo(todo.filter((_, indx) => index !== indx));
                                                // setTodo();

                                                // todo.splice(index, 1);
                                                localStorage.setItem("todo", JSON.stringify(todo));
                                                saveStorageItems();
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
                :
                <></>
            }
        </>
    )
}

export default Todo
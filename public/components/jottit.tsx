import { useContext, useEffect, useState } from 'react';
import { Box, Check, Plus, Settings, Square } from 'react-feather'
import styles from '@styles/Home.module.css'
import { DocumentContext } from '@public/@types/document_context';

const Jottit: React.FC<{}> = () =>  {
    const { documentSettings, setDocumentSettings } = useContext(DocumentContext);
    const color = "rgb(var(--clock-color))";
    const [ date, setDate ] = useState(new Date());

    return (
        <>
        {
            documentSettings.settings.jottit ?
            <div>
                    <div className={styles.todoHeader}>
                        {
                            documentSettings.states.editingTitle ?
                            <input type="text" placeholder={documentSettings.settings.title.value} 
                            onChange={(e) => setDocumentSettings({...documentSettings, settings: { ...documentSettings.settings, title: { ...documentSettings.settings.title, value: e.target.value } }})} 
                            onKeyDown={(e) => {
                                if(e.key == "Enter") setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingJottTitle: false } })
                            }} autoFocus/>
                            :
                            <h2 onClick={() => setDocumentSettings({...documentSettings, states: { ...documentSettings.states, editingJottTitle: true } })}>{documentSettings.settings.title.value}</h2>
                        }
                    
                        <Plus color={"rgb(var(--primary-color))"} size={20} strokeWidth={1.5} onClick={() => {
                            // setTodo([
                            //     ...todo,
                            //     {
                            //         editable: true,
                            //         title: '',
                            //         completed: false
                            //     }
                            // ])

                            // localStorage.setItem("todo", JSON.stringify(todo));
                            // saveTodo();
                        }}/>
                    </div>
                    <div className={styles.todoBody}>	
                        <textarea>

                        </textarea>
                    </div>
                </div> 
            :
            <></>
        }
        </>
    )
}

export default Jottit;
import { useContext, useEffect, useState } from 'react';
import styles from '@styles/Home.module.css'
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import Clock from './clock';
import Todo from './todo_component';

const Body = () => {
    const [ layout, setLayout ] = useState([
        {i: 'clock', x: 0, y: 0, w: 2, h: 1, minW: 2, isResizable: false},
        {i: 'todo', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, maxH: 5},
    ])

    return (
        <div>
            <div className={styles.leftSide}>
                <div key="clock" className={".grid-item__title"} ><Clock /></div>
            </div>

            <div className={styles.rightSide}>
                <div key="todo" className={".grid-item__title"} ><Todo /></div>

            </div>
        </div>
    )
}

export default Body; 
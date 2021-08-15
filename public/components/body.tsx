import { useContext, useEffect, useState } from 'react';
import styles from '@styles/Home.module.css'
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import RGL, { Responsive, WidthProvider } from 'react-grid-layout'
import Clock from './clock';
import Todo from './todo_component';

const GridLayout = WidthProvider(RGL);

const Body = () => {
    const [ layout, setLayout ] = useState([
        {i: 'clock', x: 0, y: 0, w: 2, h: 1, minW: 2, isResizable: false},
        {i: 'todo', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, maxH: 5},
    ])

    return (
        <GridLayout 
            className={styles.gridLayout}
            cols={6}
            onLayoutChange={setLayout}
            layout={layout}
            width={window.innerWidth}
            isDraggable
            isRearrangeable
            isResizable
            >
            <div key="clock" className={".grid-item__title"} ><Clock /></div>
            <div key="todo" className={".grid-item__title"} ><Todo /></div>
        </GridLayout>
    )
}

export default Body; 
import { DocumentContextType } from '@public/@types/document';
import { DocumentContext } from '@public/@types/document_context'
import { truncate } from 'node:fs';
import { useContext, useRef, useState } from 'react'
import { Box, Check, Code, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'

export default function Theme(props) {
    const documentSettings = props.settings;
    const callback = props.callback;

    return (
        <div style={{ position: 'relative' }}>
            <h1>Theme</h1>
            <p>Customise daily to your liking!</p>
            <br />

        </div>
    )
}
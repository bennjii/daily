import { supabase } from '@root/client';
import { Box, Check, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'
import Button from './button';

export default function Features({ callback }) {
    const parse = (string) => {
        return string.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5');
    }

    return (
        <div className={styles.welcomePage}>
            <h1>This is daily</h1>
            <p>Choose how to customise daily</p>
            <br />

            <div>
                {/* Features or choose theme */}
            </div>
            
            <Button title={"Continue"} onClick={() => {
                callback("finish")
            }}/>
        </div>
    )
}
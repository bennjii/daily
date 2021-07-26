import { Box, Check, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'
import Button from './button';

export default function Welcome({ callback }) {
    const parse = (string) => {
        return string.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5');
    }

    return (
        <div className={styles.welcomePage}>
            <h1>Welcome</h1>
            <p>Thank you for choosing daily! </p>
            <br />

            
            <Button title={"Continue"} onClick={() => {
                callback("auth")
            }}/>
        </div>
    )
}
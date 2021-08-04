import { Box, Check, Square } from 'react-feather'
import styles from '@styles/Home.module.css'

import { SAuth } from '@components/s_auth'
import { supabase } from '@root/client';
import { useEffect } from 'react';

export default function Auth(props) {
    const documentSettings = props.settings;
    const callback = props.callback;

    const parse = (string) => {
        return string.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5');
    }

    useEffect(() => {
        supabase.auth.onAuthStateChange((type, session) => {
            console.log('[USER]:\tUpdating States')
            if(session.user) {
                if(session.user.aud == 'authenticated') {
                    callback('features')
                }
            }
        });
    }, [])

    return (
        <div>
            <h1>Account</h1>
            <p>Sign into a daily account to enable third party integration</p>
            <br />

            <div className={styles.auth}>
                <SAuth client={supabase}/>
            </div>      
        </div>
    )
}
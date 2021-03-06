import { DocumentContextType } from '@public/@types/document';
import { DocumentContext } from '@public/@types/document_context'
import { supabase } from '@root/client';
import { useContext, useEffect, useRef, useState } from 'react'
import { Box, Check, Code, Square } from 'react-feather'
import styles from '../../styles/Home.module.css'

export default function Accounts(props) {
    const documentSettings = props.settings;
    const callback = props.callback;

    const [ userData, setUserData ] = useState(null);

    useEffect(() => {
        if(supabase.auth.session())
            supabase
                .from('users')
                .select('*')
                .eq('id', supabase.auth.session()?.user.id)
                .then(usr => {
                    setUserData(usr.data[0]);
                });
    })
    


    return (
        <div style={{ position: 'relative' }}>
            <h1>Accounts</h1>
            <p>Link Accounts to make your experience better, but feel free to stay disconnected.</p>
            <br />

            
            {/* <hr /> */}

            <h4>Accounts</h4>
            
            <div>
                <div className={styles.accountLink}>
                    <p>daily ~ sync</p>

                    <p>{userData?.username}</p>

                    <div>
                        <div 
                            className={styles.authTrue}
                        >
                            {
                                supabase.auth.user()?.aud == 'authenticated' ?
                                <Check size={18} color={"rgb(var(--complementary-color))"} />
                                :
                                <p>Link Account</p>
                            }
                        </div>
                    </div>
                </div>

                {/* <div className={styles.accountLink}>
                    <p>spotify</p>

                    <p></p>

                    <div>
                        <div 
                            className={styles.authTrue}
                        >
                            {
                                supabase.auth.user().aud == 'authenticated' ?
                                <Check size={18} color={"rgb(var(--complementary-color))"} />
                                :
                                <p>Link Account</p>
                            }
                        </div>
                    </div>
                </div> */}
            </div>
            
        </div>
    )
}
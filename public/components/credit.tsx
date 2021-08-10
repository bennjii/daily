import React, { useContext, useEffect, useRef, useState } from 'react';
import { ArrowRight, Box, Check, Plus, Settings, Square, Trash } from 'react-feather'
import styles from '@styles/Home.module.css'
import { DocumentContext } from '@public/@types/document_context';
import { getThemeColor } from '@public/@types/themes';

const Credit: React.FC<{}> = () =>  {
    const { documentSettings, backgroundStats } = useContext(DocumentContext);
    const color = "rgb(var(--clock-color))"; 

    return (
        <>
            {
                documentSettings.settings.backgroundImage.value == 'dynamic' ?
                <div className={styles.photoCredit}>
                    {
                        documentSettings.settings.backgroundType.value == 'standard' ?
                        <h6 style={{ color, fontWeight: 100, fontSize: '12px' }}>
                            <p>Photo by</p>
                            <a href={`https://unsplash.com/@${backgroundStats?.user?.username}`}>{backgroundStats?.user?.name} {backgroundStats?.user?.lastName}</a>
                        </h6>
                        :
                        <h6 style={{ color, fontWeight: 100, fontSize: '12px' }}>
                            <p>Lorenz Chaos Attractor</p>
                        </h6>
                    }
                </div>
                :	
                <></>
            }
        </>
    )
}

export default Credit
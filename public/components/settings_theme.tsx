import { DocumentContextType } from '@public/@types/document';
import { DocumentContext } from '@public/@types/document_context'
import { truncate } from 'node:fs';
import { useContext, useEffect, useRef, useState } from 'react'
import { Box, Check, Code, Square } from 'react-feather'
import styles from '@styles/Home.module.css'

import { HexColorPicker } from 'react-colorful' 

import { hexToRGB, RGBToHex, saveTheme, theme_list } from '@public/@types/themes' 

export default function Theme(props) {
    const documentSettings = props.settings;
    const callback = props.callback;

    const [ colors, setColors ] = useState(theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors);

    useEffect(() => {
        console.log("Theme Changed!");        
        setColors(theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors);

        if(documentSettings.settings.theme.value.includes("custom")) {
            const theme = theme_list.find(e => e.name == documentSettings.settings.theme.value);
            saveTheme(theme);
        }

    }, [, theme_list])

    return (
        <div style={{ position: 'relative' }}>
            <h1>Theme</h1>
            <p>Customise daily to your liking!</p>
            <br />

            <div className={styles.themeList}>
                {
                    theme_list.map(theme => {
                        return (
                            <div 
                                key={`THEME-${theme.name}`}
                                className={`${styles.themeIcon}`} 
                                //@ts-expect-error
                                style={{ ...theme.colors }}
                                onClick={() => {
                                    callback({
                                        ...documentSettings,
                                        settings: {
                                            ...documentSettings.settings,
                                            theme: {
                                                ...documentSettings.settings.theme,
                                                value: theme.name
                                            }
                                        }
                                    });

                                    // documentSettings.settings.theme.value = theme.name;
                                    // callback(documentSettings);

                                    // documentSettings.settings.theme.value = theme.name;
                                    // callback(documentSettings);
                                }}
                            >
                                {
                                    documentSettings.settings.theme.value == theme.name ? 
                                    <div className={styles.themeActive}></div>
                                    : 
                                    <div></div>
                                }

                                {theme.name}
                            </div>
                        )
                    })
                }
            </div>

            <h4>custom</h4>

            <div className={styles.custom + " " + (documentSettings.settings.theme.value == "custom" ? styles.customActive : styles.customDeactivated)}>
                <div>
                    <p>Primary Color</p>

                    <HexColorPicker color={RGBToHex(colors['--primary-color'])} onChange={(e) => {
                        const rgb = hexToRGB(e);
                        theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors['--primary-color'] = `${rgb.r},${rgb.g},${rgb.b}`;

                        const theme = theme_list.find(e => e.name == documentSettings.settings.theme.value);
                        saveTheme(theme);
                    }}/>
                </div>

                <div>
                    <p>Complementary Color</p>

                    <HexColorPicker color={RGBToHex(colors['--complementary-color'])} onChange={(e) => {
                        const rgb = hexToRGB(e);
                        theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors['--complementary-color'] = `${rgb.r},${rgb.g},${rgb.b}`;

                        const theme = theme_list.find(e => e.name == documentSettings.settings.theme.value);
                        saveTheme(theme);
                    }}/>
                </div>

                <div>
                    <p>Background Color</p>

                    <HexColorPicker color={RGBToHex(colors['--background-color'])} onChange={(e) => {
                        const rgb = hexToRGB(e);
                        theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors['--background-color'] = `${rgb.r},${rgb.g},${rgb.b}`;

                        const theme = theme_list.find(e => e.name == documentSettings.settings.theme.value);
                        saveTheme(theme);
                    }}/>
                </div>

                {/* <div>
                    <p>Clock Color</p>

                    <HexColorPicker color={RGBToHex(colors['--clock-color'])} onChange={(e) => {
                        const rgb = hexToRGB(e);
                        theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors['--clock-color'] = `${rgb.r},${rgb.g},${rgb.b}`;

                        const theme = theme_list.find(e => e.name == documentSettings.settings.theme.value);
                        saveTheme(theme);
                    }}/>
                </div> */}

                <div>
                    <p>Approval Color</p>

                    <HexColorPicker color={RGBToHex(colors['--approval-color'])} onChange={(e) => {
                        const rgb = hexToRGB(e);
                        theme_list.find((e) => e.name == documentSettings.settings.theme.value).colors['--approval-color'] = `${rgb.r},${rgb.g},${rgb.b}`;

                        const theme = theme_list.find(e => e.name == documentSettings.settings.theme.value);
                        saveTheme(theme);
                    }}/>
                </div>
            </div>
        </div>
    )
}
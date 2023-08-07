import React from "react";
import { Button, Container } from "@mui/material";
import { LightToggle } from "../LightToggle";
import { ThemeContext, themes } from "../../contexts/ThemeContext";

import styles from './Header.module.scss';

export const Header = ({onChange}) => {
    const isAuth = false;
    const onClickLogout = () => {};

    

    return (
        <div className={styles.root}>
            <div className={styles.inner}>
                <a className={styles.logo} href="/">
                    <p>AESTY BLOG</p>
                </a>
                <div className={styles.buttons}>
                    {isAuth ? (
                        <>
                            <a href="/posts/create">
                                <Button variant="contained">Write a newsletter</Button>
                            </a>
                            <Button onClick={onClickLogout} variant="contained" color="error">
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <button className={styles.login} onClick={onChange}>LOGIN</button>
                    )}
                    <ThemeContext.Consumer>
                        {({ theme, setTheme }) => (
                        <LightToggle
                            onChange={() => {
                                if (theme === themes.light) setTheme(themes.dark)
                                if (theme === themes.dark) setTheme(themes.light)
                            }}
                        />
                        )}
                    </ThemeContext.Consumer>
                </div>
            </div>
        </div>
    )
}
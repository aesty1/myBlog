import React from "react";

import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.inner}>
                <p className={styles.text}>Kadirov Denis</p>
                <div className={styles.buttons_container}>
                    <a className={styles.button} id={styles.telegram} href="https://t.me/denis738"></a>
                    <a className={styles.button} id={styles.vk} href="https://vk.com/deniskadirov"></a>
                    <a className={styles.button} id={styles.github} href="https://github.com/aesty1"></a>
                </div>
            </div>
        </div>
    )
}
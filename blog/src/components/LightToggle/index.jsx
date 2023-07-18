import React from "react";
import styles from "./LightToggle.module.scss";

export const LightToggle = ({ onChange }) => {
    return (
        <button className={styles.light} onClick={onChange}></button>
    )
    
}
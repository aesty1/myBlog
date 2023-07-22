import React from "react";

import styles from "./AddComment.module.scss";

export const AddComment = () => {
    return (
        <div className={styles.root}>
            <input className={styles.input} type="text" placeholder="Write a comment.."/>
        </div>
    )
}
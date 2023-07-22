import React from "react";
import { Skeleton } from "@mui/material";

import styles from "./Comments.module.scss";

export const Comments = ({items, children, isLoading = false}) => {
    return (
        <div className={styles.root}>
            <p className={styles.title}>Comments:</p>
            <div className={styles.comments}>
                {(isLoading ? [...Array(3)] : items).map((obj, index) => (
                    <React.Fragment key={index}>
                        {isLoading ? (
                            <div className={styles.comment}>
                                <Skeleton variant="circular" width={62} height={62} />
                                <div>
                                    <Skeleton variant="text" height={25} width={120} />
                                    <Skeleton variant="text" height={18} width={630} />
                                    <Skeleton variant="text" height={18} width={230} />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.comment}>
                                <img className={styles.avatar} src={obj.user.avatarUrl}/>
                                <div className={styles.comment_text}>
                                    <p className={styles.name}>{obj.user.fullname}</p>
                                    <p className={styles.text}>{obj.text}</p>
                                    <p className={styles.date}>{obj.date}</p>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            {children}
        </div>
    )
}
import React from "react";
import { PostSkeleton } from "./Skeleton";

import styles from "./Post.module.scss";

import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const Post = ({
    _id,
    title,
    subtitle,
    createdAt,
    imageUrl,
    user,
    viewsCount,
    commentsCount,
    tags,
    theme,
    children,
    isFullPost,
    isLoading,
    isEditable
}) => {
    if(isLoading) {
        return <PostSkeleton />
    }

    const onClickRemove = () => {

    }

    return (
        <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
            {isEditable && (
                <div className={styles.editButtons}>
                    <a href={`posts/{$id}/edit`}>
                        <IconButton color="primary">
                            <EditIcon />
                        </IconButton>
                    </a>
                    <IconButton onClick={onClickRemove} color="secondary">
                        <DeleteIcon />
                    </IconButton>
                </div>
            )}
            {imageUrl && (
                <>
                    <img className={clsx(styles.image, { [styles.imageFull]: isFullPost })} src="/resources/post.jpg" alt={title} />
                    <img className={clsx(styles.imageCopy, { [styles.imageFullCopy]: isFullPost })} src="/resources/post.jpg" alt={title} />
                </>
                
            )}
            <div className={styles.wrapper}>
                <p className={styles.author_text}><span className={styles.theme_text}>{theme}</span> ·  {user}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}
import React from "react";
import SimpleMDE from 'react-simplemde-editor';

import styles from "./AddPost.module.scss";
import 'easymde/dist/easymde.min.css';

export const AddPost = () => {
    const imageUrl = '';
    const [value, setValue] = React.useState('');

    const handleChangeFile = () => {};

    const onClickRemoveImage = () => {};

    const onChange = React.useCallback((value) => {
        setValue(value);
    }, []);

    const options = React.useMemo(
        () => ({
        spellChecker: false,
        maxHeight: '400px',
        autofocus: true,
        placeholder: 'Введите текст...',
        status: false,
        autosave: {
            enabled: true,
            delay: 1000,
        },
        }),
        [],
    );

    return (
        <div className={`${styles.root} content`}>
            <div className={styles.content}>
                <input className={styles.header_text} type="text" placeholder="Заголовок статьи.."/>
                <input className={styles.input} type="text" placeholder="Тэги (через пробел)"/>
                <button className={styles.upload_button}>
                    Загрузить превью
                </button>
                <input type="file" onChange={handleChangeFile} hidden />
                {imageUrl && (
                    <button onClick={onClickRemoveImage}>
                    Удалить
                    </button>
                )}
                {imageUrl && (
                    <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
                )}
                <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} />
                <input type="file" onChange={handleChangeFile} hidden />
                <div className={styles.buttons}>
                    <button className={styles.publish_button}>
                        <p>Опубликовать</p>
                    </button>
                    <button className={styles.cancel_button}>
                        <p>Отмена</p>
                    </button>
                </div>
            </div>
        </div>
    )
}   
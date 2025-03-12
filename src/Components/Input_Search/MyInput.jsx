import React from 'react';
import styles from './input.module.css'

const MyInput = () => {

    return (
        <>
            <input type="text" placeholder="Введите код отхода" className={styles.search} />
        </>
    );
};

export default MyInput;

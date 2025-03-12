import React from 'react';
import MyInput from '../Input_Search/MyInput';
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrap}>
                <MyInput className={styles.input} />
                <br/>
                <span className={styles.code}>3142701 Отходы бетона</span>
            </div>
            <div className={styles.wrap2}>
                <span>Местоположение обьекта:</span>
                <br/>
                <span>Берсона 3</span>
            </div>
            <div className={styles.wrap2}>
                <button className={styles.button}>Выбрать Местоположение</button>
            </div>
        </div>
    );
};

export default Header;
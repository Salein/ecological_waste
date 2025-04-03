import React from 'react';
import MyInput from '../Input_Search/MyInput';
import Button from 'react-bootstrap/Button';
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
                <span>Место образования отходов:</span>
                <br/>
                <span>Берсона 3</span>
            </div>
            <div className={styles.wrap3}>
                <Button variant="dark" className={styles.button}>Выбрать Местоположение</Button>
            </div>
        </div>
    );
};

export default Header;
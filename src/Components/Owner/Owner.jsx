import React from 'react';
import styles from './owner.module.css'

const Owner = () => {
    return (
        <div>
            <ul className={styles.container}>
                <span>Собственник:</span>
                <li>ОАО "ПМК-42"</li>
                <li>ОАО "ПМК-42"</li>
                <li>ОАО "ПМК-42"</li>
                <li>ОАО "ПМК-42"</li>
                <li>ОАО "ПМК-42"</li>
                <li>ОАО "ПМК-42"</li>
            </ul>
        </div>
    );
};

export default Owner;
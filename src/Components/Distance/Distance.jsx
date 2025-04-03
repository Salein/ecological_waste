import React from 'react';
import styles from './distance.module.css'

const Distance = () => {
    return (
        <div>
            <ul className={styles.container}>
                <span>Расстояние до обьекта:</span>
                <li>20км</li>
                <li>40км</li>
                <li>60км</li>
                <li>70км</li>
                <li>90км</li>
                <li>140км</li>
                <li>200км</li>
            </ul>
        </div>
    );
};

export default Distance;
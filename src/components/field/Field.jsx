import React from 'react';

import styles from './field.module.scss';

export const Field = (props) => {
    const {currentCar} = props;
    const {mark, model, year} = currentCar;

    return (
        <div className={styles.field}>
            <div className={styles.fieldInner}>
                <p>Выбран автомобиль {mark} {model} {year} года выпуска</p>
            </div>
        </div>
    );
};

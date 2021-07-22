import React from 'react';

import styles from '../../table.module.scss';

export const DisplayData = (props) => {
    const {filteredData, tariffs_list, setCurrentCar} = props;

    return filteredData?.map((item, index) => {
        const {mark, model, tariffs} = item;
        return (
            <div key={index} className={styles.row}>
                <p className={`${styles.rowParam} ${styles.model}`}>{mark} {model}</p>
                {tariffs_list.map((tariff, i) => <p
                    key={i}
                    className={styles.rowParam}
                    onClick={() => !!tariffs[tariff]?.year
                        ? setCurrentCar({mark, model, year: tariffs[tariff]?.year})
                        : {}}>
                    {tariffs[tariff]?.year || '—'}
                </p>)}
            </div>
        );
    });
};

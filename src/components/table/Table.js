import React from 'react';

import {DisplayData, Arrow} from './parts';

import styles from './table.module.scss';

export const Table = (props) => {
    let {data, setSorting, searchParams, setCurrentCar, sorting} = props;

    if (data?.length === 0) return null;

    const {cars, tariffs_list} = data;
    const {prop, value} = sorting;

    let filteredData = searchParams.length > 0
        ? cars.filter(item => {
            const {mark, model, tariffs} = item;
            let conformity = true;
            const itemData = [mark, model, ...Object.values(tariffs).map(e => String(e.year))];
            searchParams.forEach(str => conformity = itemData.some(e => e.toLowerCase().includes(str)) ? conformity : false);
            return conformity;
        }) : cars;

    if (prop === 'model') {
        filteredData.sort((a, b) => `${a.mark}${a.model}` > `${b.mark}${b.model}`
            ? value === 'raise' ? 1 : -1
            : value === 'raise' ? -1 : 1)
    } else {
        filteredData.sort((a, b) => {
            const compare = String(a.tariffs[prop]?.year) > String(b.tariffs[prop]?.year);
            if (value === 'raise') {
                if (!b.tariffs[prop]) return -1;
                return compare ? 1 : -1;
            } else {
                if (!a.tariffs[prop]) return 1;
                return compare ? -1 : 1;
            }
        })
    }

    const changeSortingParams = (type) => setSorting(() => {
        if ((value === 'decrease') || (prop !== type)) return {prop: type, value: 'raise'};
        return {prop: type, value: 'decrease'};
    });

    return (
        <div className={styles.table}>
            <div className={`${styles.row} ${styles.rowHeader}`}>
                <p
                    className={`${styles.rowParam} ${styles.model}`}
                    onClick={() => changeSortingParams('model')}
                >
                    Марка и модель
                    {prop === 'model' ? <Arrow value={value}/> : ''}
                </p>
                {tariffs_list.map((tariff, index) => <p
                    key={index}
                    className={styles.rowParam}
                    onClick={() => changeSortingParams(tariff)}>{tariff}
                    {prop === tariff ? <Arrow value={value}/> : ''}
                </p>)}
            </div>
            <DisplayData filteredData={filteredData} tariffs_list={tariffs_list} setCurrentCar={setCurrentCar}/>
        </div>
    );
};


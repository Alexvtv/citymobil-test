import React, {useState, useEffect} from 'react';

import {Table, SearchPanel, Field} from '../';

import styles from './app.module.scss';

export const App = () => {

    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useState([]);
    const [sorting, setSorting] = useState({prop: 'model', value: 'raise'});
    const [currentCar, setCurrentCar] = useState(null);

    useEffect(() => {
        fetch('https://city-mobil.ru/api/cars')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className={styles.app}>
            <div className={`${styles.header} ${styles.caption}`}>header</div>
            <div className={`${styles.sidebar} ${styles.caption}`}>sidebar</div>
            <div className={styles.mainWrapper}>
                <SearchPanel
                    setSearchParams={setSearchParams}
                />
                <div className={styles.main}>
                    <div className={styles.mainInner}>
                        <Table
                            data={data}
                            setCurrentCar={setCurrentCar}
                            searchParams={searchParams}
                            sorting={sorting}
                            setSorting={setSorting}
                        />
                    </div>
                </div>
                {currentCar !== null ? <Field currentCar={currentCar}/> : ''}
            </div>
            <div className={`${styles.footer} ${styles.caption}`}>footer</div>
        </div>
    );
};


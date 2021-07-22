import React, {useState} from 'react';

import search from '../../assets/icons/search.png';

import styles from './searchPanel.module.scss';

export const SearchPanel = ({setSearchParams}) => {
    const [searchValue, setSearchValue] = useState('');

    const changeSearchString = () => {
        setSearchParams(searchValue.toLowerCase().split(' '));
    };

    const keyHandler = (e) => {
        if (e.code === 'Enter') changeSearchString();
    };

    return (
        <div className={styles.searchPanel}>
            <img src={search} alt={''}/>
            <input placeholder={'Поиск'} onKeyPress={(e) => keyHandler(e)} value={searchValue}
                   onChange={(event) => setSearchValue(event.target.value)}/>
            <button onClick={changeSearchString}>Найти</button>
        </div>
    );
};


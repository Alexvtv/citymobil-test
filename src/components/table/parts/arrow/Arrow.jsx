import React from 'react';

import arrow from '../../../../assets/icons/arrow.png';

import styles from './arrow.module.scss';

export const Arrow = ({value}) => {
    return <img
        src={arrow}
        className={styles.arrow}
        style={value === 'decrease' ? {transform: 'rotate(180deg'} : {}}
        alt={''}/>;
};

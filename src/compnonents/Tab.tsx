import React from 'react';
import styles from './Tab.module.scss';
import { ServiceType } from '@/types/serviceType';

const Tab: React.FC<ServiceType> = (props) => {
  return (
    <div className={styles.tab__tabContainer}>
      <label className={styles.tab__label} htmlFor={`tab${props.id}`}>
        <h2 className={styles.tab__title}>{props.serviceTitle}</h2>
        <span className={styles.tab__closeCross}></span>
      </label>
      <input
        className={styles.tab__checkbox}
        type="checkbox"
        id={`tab${props.id}`}
      />
      <div className={styles.tab__info}>
        <p className={styles.tab_price}>
          <b>Стоимость:</b> {props.servicePrice}
        </p>
        <p className={styles.tab_data}>{props.serviceInfo}</p>
      </div>
    </div>
  );
};

export default Tab;

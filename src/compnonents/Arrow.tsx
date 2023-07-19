'use client';
import React from 'react';
import styles from './Arrow.module.scss';

type Props = {
  clickHandler: () => void;
  rotationAngle: number;
};

const Arrow: React.FC<Props> = (props) => {
  return (
    <button className={styles.slider__button} onClick={props.clickHandler}>
      <span
        style={{ transform: `rotate(${props.rotationAngle}deg)` }}
        className={styles.slider__Arrow}
      ></span>
    </button>
  );
};

export default Arrow;

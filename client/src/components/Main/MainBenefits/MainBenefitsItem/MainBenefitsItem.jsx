import React from 'react';
import styles from './MainBenefitsItem.module.scss';
import {background} from "../../../../assets";

export const MainBenefitsItem = ({title, text, icon}) => (
  <div className={styles.benefit}>
    <div className={styles.icon}>
      <img
        src={background}
        alt="background"
      />
      <img
        src={icon}
        alt={title}
        className={styles.front}
      />
    </div>

    <p className={styles.title}>{title}</p>
    <p className={styles.text}>{text}</p>
  </div>
);

import React from 'react';
import styles from './TextBold.module.scss';

export const TextBold = ({children}) => (
  <span className={styles.text}>
    {children}
  </span>
);

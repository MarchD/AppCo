import React from 'react';
import styles from './PaginationPage.module.scss';

export const PaginationPage = ({page = 1}) => (
  <div className={styles.page}>
    {page}
  </div>
);

import React from 'react';
import styles from './PaginationPage.module.scss';
import classNames from "classnames";

export const PaginationPage = ({page = 1, currentPage, toPage}) => (
  <div
      className={classNames(styles.page, {[styles.active]: page === currentPage })}
      onClick={() => {
        console.log(page)
        toPage(page)
      }}
  >
    {page}
  </div>
);

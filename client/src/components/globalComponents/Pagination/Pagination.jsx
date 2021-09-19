import React from 'react';
import styles from './Pagination.module.scss';
import {PaginationArrow} from "./PaginationArrow";
import {PaginationPage} from "./PaginationPage";

export const Pagination = ({page, countOfPage}) => (
  <div className={styles.pagination}>
    <PaginationArrow

    />
    {
      Array(countOfPage).slice(0, 6).map(onePage => (
        <PaginationPage page={onePage} currentPage={page}/>
        )
      )
    }

      <PaginationArrow
        right
      />

  </div>
);

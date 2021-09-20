import React, {useEffect} from 'react';
import styles from './Pagination.module.scss';
import {PaginationArrow} from "./PaginationArrow";
import {PaginationPage} from "./PaginationPage";

export const Pagination = ({
                               page,
                               countOfPage,
                               toPage
                           }) => {

    useEffect(() => {}, page);

    const toNextPage = () => {
        if (page <= countOfPage) {
            toPage(page + 1);
        }
    };

    const toPrevPage = () => {
        if (page > 1) {
            toPage(page - 1);
        }
    };

    return (
        <div className={styles.pagination}>
            <PaginationArrow onClick={toPrevPage}/>
            {
                Array(countOfPage).fill('').slice(page - 1, page + 4).map((onePage, i) => (
                        <PaginationPage
                            page={page + i}
                            currentPage={page}
                            toPage={toPage}
                        />
                    )
                )
            }
            <PaginationArrow right onClick={toNextPage}/>
        </div>
    )
};

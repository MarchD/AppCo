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
        if (page < countOfPage) {
            toPage(page + 1);
        }
    };

    const toPrevPage = () => {
        if (page > 1) {
            toPage(page - 1);
        }
    };

    const countOfPages = 5;

    const first = () => {
        if (page <= Math.ceil(countOfPages / 2)) return 1;
        if (page >= countOfPage - 3) return countOfPage - 5;
        return page - 1;
    }

    const second = () => {
        if (page <= Math.ceil(countOfPages / 2)) return countOfPages + 1;
        if (page >= countOfPage - 3) return countOfPage;
        return page + 4;
    }

    const pageItem = (i) => {
        if (page <= Math.ceil(countOfPages / 2))  return 1 + i;
        if (page >= countOfPage - 1)  return first() + i + 1;
        if (page === countOfPage - 3) return first() + i;
        return page + i - 2;
    }

    return (
        <div className={styles.pagination}>
            <PaginationArrow onClick={toPrevPage}/>
            {
                page >= countOfPage - 1
                    ? Array(countOfPage).fill('').slice(first()).map((onePage, i) => (
                            <PaginationPage
                                page={pageItem(i)}
                                currentPage={page}
                                toPage={toPage}
                            />
                        )
                    )
                    : Array(countOfPage).fill('').slice(first(), second()).map((onePage, i) => (
                            <PaginationPage
                                page={pageItem(i)}
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

import React from 'react';
import styles from './LayoutUsers.module.scss';
import classNames from "classnames";
import {BreadCrumbs} from "../globalComponents/BreadCrumbs";

export const LayoutUsers = ({children, crumbs, title, filterElement}) => {
    return (
        <section className={classNames('container')}>
            <BreadCrumbs crumbs={crumbs}/>

            <div className={styles.block}>
                <h2 className={styles.title}>{title}</h2>
                {filterElement}
            </div>

            {children}
        </section>
    )
};

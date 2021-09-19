import React from 'react'
import styles from './BreadCrumbs.module.scss';
import {NavLink} from "react-router-dom";

export const BreadCrumbs = ({crumbs}) => (
    <div className={styles.breadcrumbs}>
        <NavLink to="/" className={styles.link}>
            Main page
        </NavLink>
        {
            crumbs.map(({name, link}) => (
                <>
                    <span className={styles.separator}/>
                    <NavLink
                        to={link}
                        key={link}
                        className={styles.link}
                        activeClassName={styles.active}
                    >
                        {name}
                    </NavLink>
                </>
            ))
        }
    </div>
);

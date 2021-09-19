import React from 'react';
import {Link} from "react-router-dom";
import styles from './Logo.module.scss';
import {MAIN_PAGE_ROUTE} from "../../App/AppRoutes/routesConst";
import classNames from "classnames";

export const Logo = ({type}) => (
  <Link
    to={MAIN_PAGE_ROUTE}
    className={classNames(styles.logo, {[styles[type]]: type})}
  >
    AppCo
  </Link>
);

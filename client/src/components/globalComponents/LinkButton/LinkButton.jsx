import React from 'react';
import {Link} from "react-router-dom";
import styles from './LinkButton.module.scss';
import {USERS_PAGE_ROUTER} from "../../App/AppRoutes/routesConst";

export const LinkButton = ({text}) => (
  <Link to={USERS_PAGE_ROUTER} className={styles.link}>
    {text}
  </Link>
);

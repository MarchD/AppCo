import React from 'react';
import styles from './Footer.module.scss';
import {useLocation} from "react-router";
import {Logo} from "../globalComponents/Logo";
import classNames from "classnames";

export const Footer = () => {
  const {pathname} = useLocation();
  const date = new Date().getFullYear();

  return pathname === '/'
    ? null
    : (
      <footer className={styles.header}>
        <div className={classNames(styles.inner, 'container')}>
          <Logo type={'small'}/>

            <p>
                All rights reserved by ThemeTags
            </p>

            <p>
                Copyrights &copy; {date}.
            </p>
        </div>
      </footer>
    )
};

import React from 'react';
import styles from './Header.module.scss';
import {useLocation} from "react-router";
import {Logo} from "../globalComponents/Logo";
import classNames from "classnames";

export const Header = () => {
  const {pathname} = useLocation();

  return pathname === '/'
    ? null
    : (
      <header className={styles.header}>
        <div className={classNames(styles.inner, 'container')}>
          <Logo type={'medium'}/>
        </div>
      </header>
    )
};

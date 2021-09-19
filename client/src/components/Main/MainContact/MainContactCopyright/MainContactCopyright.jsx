import React from 'react';
import styles from './MainContactCopyright.module.scss';
import {Logo} from "../../../globalComponents/Logo";

export const MainContactCopyright = () => {
  const date = new Date().getFullYear();
  console.log(date)

  return (
    <div className={styles.copyright}>
      <Logo type={'medium'}/>
      <p>
        All rights reserved by ThemeTags
      </p>

      Copyrights &copy; {date}.

    </div>
  )
}

import React from 'react';
import styles from './UsersTable.module.scss';
import {UsersTableHead} from "./UsersTableHead";
import {UsersTableBody} from "./UsersTableBody";

export const UsersTable = () => {
  return (
    <table className={styles.table}>
      <UsersTableHead />
      <UsersTableBody />
    </table>
  )
};

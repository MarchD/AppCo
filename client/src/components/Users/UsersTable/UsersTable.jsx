import React from 'react';
import './UsersTable.module.scss';
import {UsersTableHead} from "./UsersTableHead";
import {UsersTableBody} from "./UsersTableBody";

export const UsersTable = () => {
  return (
    <table>
      <UsersTableHead />
      <UsersTableBody />
    </table>
  )
};

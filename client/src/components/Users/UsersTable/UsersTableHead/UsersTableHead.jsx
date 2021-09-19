import React from 'react';
import styles from './UsersTableHead.module.scss';
import {headOfTable} from "../../../../api/apiStatic";

export const UsersTableHead = () => {


  return (
    <thead>
      <tr>
        {headOfTable.map(item => (
          <td key={item} className={styles.cell}>
            {item}
          </td>
        ))}
      </tr>
    </thead>
  )
};

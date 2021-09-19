import React, {useState, useEffect} from 'react';
import styles from './UsersTableBody.module.scss';
import {getUsers} from "../../../../api/API";

export const UsersTableBody = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(res => {
        setUsers(res.data)
        console.log(res)
      });
  }, [])

  return (
    <tbody>
    {
      users.map(user => (
        <tr key={user.id} className={styles.row}>
          <td className={styles.center}>
            {user.id}
          </td>
          <td>
            {user.first_name}
          </td>
          <td>
            {user.last_name}
          </td>
          <td>
            {user.email}
          </td>
          <td className={styles.center}>
            {user.gender}
          </td>
          <td className={styles.center}>
            {user.ip_address}
          </td>
          <td className={styles.center}>
            {user.total_clicks}
          </td>
          <td className={styles.center}>
            {user.total_page_views}
          </td>
        </tr>
      ))
    }
    </tbody>
  )
};

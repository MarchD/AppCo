import React, {useContext} from 'react';
import styles from './UsersTableBody.module.scss';
import {AppContext} from "../../../App/AppContainer";

export const UsersTableBody = () => {
    const {users} = useContext(AppContext);

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

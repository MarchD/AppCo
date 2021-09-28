import React, {useContext, useEffect} from 'react';
import {USER_PAGE_ROUTER} from "../App/AppRoutes/routesConst";
import {LayoutUsers} from "../Layout";
import {AppContext} from "../App/AppContainer";
import {Loader} from "../globalComponents/Loader";
import {useHistory} from "react-router-dom";

export const User = () => {
    const {getUserById, user, isLoader, clearUser} = useContext(AppContext);
    const history = useHistory();
    const userId = +history.location.pathname.replaceAll(/[^0-9]/g, '')
    const crumbs = [{name: `${user.first_name} ${user.last_name}`, link: USER_PAGE_ROUTER}];

    useEffect(() => {
        getUserById(userId);

        return () => clearUser();
    }, []);

    return (
        <LayoutUsers
            crumbs={crumbs}
            title={`${user.first_name} ${user.last_name}`}
            filterElement={'sefase'}
        >
            {
                isLoader
                    ? <Loader/>
                    : <div>{user.last_name}</div>
            }
        </LayoutUsers>
    )
};

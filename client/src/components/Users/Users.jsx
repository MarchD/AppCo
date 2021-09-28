import React, {useContext, useEffect} from 'react';
import {USERS_PAGE_ROUTER} from "../App/AppRoutes/routesConst";
import {UsersTable} from "./UsersTable";
import {Pagination} from "../globalComponents/Pagination";
import {LayoutUsers} from "../Layout";
import {AppContext} from "../App/AppContainer";
import {Loader} from "../globalComponents/Loader";

export const Users = () => {
    const crumbs = [{name: 'Users statistics', link: USERS_PAGE_ROUTER}];
    const {getAllUsers, pageData, isLoader} = useContext(AppContext);

    useEffect(() => {
        getAllUsers(1);
    }, []);

    return (
        <LayoutUsers crumbs={crumbs} title={'User statistics'}>
            {
                isLoader
                    ? <Loader/>
                    : (
                        <>
                            <UsersTable/>
                            <Pagination
                                countOfPage={pageData.lastPage}
                                page={pageData.currentPage}
                                toPage={getAllUsers}
                            />
                        </>
                    )
            }
        </LayoutUsers>
    )
};

import React, {useContext, useEffect} from 'react';
import {USERS_PAGE_ROUTER} from "../App/AppRoutes/routesConst";
import {UsersTable} from "./UsersTable";
import {Pagination} from "../globalComponents/Pagination";
import {LayoutUsers} from "../Layout";
import {AppContext} from "../App/AppContainer";

export const Users = () => {
  const crumbs = [{name: 'Users statistics', link: USERS_PAGE_ROUTER}];

  const {getAllUsers, pageData} = useContext(AppContext);

  useEffect(() => {
      getAllUsers(1);
  }, []);

  return (
      <LayoutUsers crumbs={crumbs} title={'Users statistics'}>
          <UsersTable />
          <Pagination
              countOfPage={pageData.lastPage}
              page={pageData.currentPage}
              toPage={getAllUsers}
          />
      </LayoutUsers>
  )
};

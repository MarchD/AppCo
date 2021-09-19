import React from 'react';
import {USERS_PAGE_ROUTER} from "../App/AppRoutes/routesConst";
import {UsersTable} from "./UsersTable";
import {Pagination} from "../globalComponents/Pagination";
import {LayoutUsers} from "../Layout";

export const Users = () => {
  const crumbs = [{name: 'Users statistics', link: USERS_PAGE_ROUTER}];

  return (
      <LayoutUsers crumbs={crumbs} title={'Users statistics'}>
          <UsersTable />
          <Pagination countOfPage={68} page={1}/>
      </LayoutUsers>
  )
};

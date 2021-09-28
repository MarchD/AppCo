import {MAIN_PAGE_ROUTE, USERS_PAGE_ROUTER, USER_PAGE_ROUTER, PAGE_NOT_FOUND_ROUTER} from "./routesConst";
import {Main} from "../../Main";
import React from "react";
import User from "../../User";
import {PageNotFound} from "../../PageNotFound";

const Users = React.lazy(() => import('../../Users/index'));

export const routes = [
  {
    path: MAIN_PAGE_ROUTE,
    component: Main
  },
  {
    path: USERS_PAGE_ROUTER,
    component: Users
  },
  {
    path: USER_PAGE_ROUTER,
    component: User
  },
  {
    path: PAGE_NOT_FOUND_ROUTER,
    component: PageNotFound
  },
];

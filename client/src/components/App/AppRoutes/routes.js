import {MAIN_PAGE_ROUTE, USERS_PAGE_ROUTER} from "./routesConst";
import {Main} from "../../Main";
import React from "react";

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
];

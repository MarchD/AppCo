import React from 'react';
import {Route, Switch} from 'react-router';
import {routes} from "./AppRoutes/routes";
import {Loader} from "../globalComponents/Loader";
import {Redirect} from "react-router-dom";
import {PAGE_NOT_FOUND_ROUTER} from "./AppRoutes/routesConst";

export const AppRouter = () => (
  <Switch>
    <React.Suspense fallback={<Loader/>}>
    {
      routes.map(({path, component}) => (
        <Route exact path={path} component={component} key={path} />
      ))
    }
    <Redirect to={PAGE_NOT_FOUND_ROUTER} />
    </React.Suspense>
  </Switch>
);

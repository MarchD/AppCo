import React from 'react';
import {Route, Switch} from 'react-router';
import {routes} from "./AppRoutes/routes";
import {Loader} from "../globalComponents/Loader";

export const AppRouter = () => (
  <Switch>
    <React.Suspense fallback={<Loader/>}>
    {
      routes.map(({path, component}) => (
        <Route exact path={path} component={component} key={path} />
      ))
    }
    </React.Suspense>
  </Switch>
);

import React from 'react';
import {Route, Switch} from 'react-router';
import {routes} from "./AppRoutes/routes";

export const AppRouter = () => (
  <Switch>
    {
      routes.map(({path, component}) => (
        <Route exact path={path} component={component} key={path} />
      ))
    }
  </Switch>
);

import React from 'react';
import {Route, Switch} from 'react-router';
import {routes} from "./AppRoutes/routes";

export const AppRouter = () => (
  <Switch>
    <React.Suspense fallback={<div>Loading...</div>}>
    {
      routes.map(({path, component}) => (
        <Route exact path={path} component={component} key={path} />
      ))
    }
    </React.Suspense>
  </Switch>
);

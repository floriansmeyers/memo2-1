import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from 'router/PrivateRoute';
import { IRoutesProps } from 'utils';

export const renderRoutes = (routes: IRoutesProps[]): React.ReactNode =>
  routes.map(({ name, path, Component, exact, restricted }) =>
    !restricted ? (
      <Route key={name} exact={exact} path={path} component={Component} />
    ) : (
      <PrivateRoute key={name} exact={exact} path={path} component={Component} />
    ),
  );

import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { AVAILABLE_ROLES, getPermission } from 'utils';

// Will probably need this commented interface when we're connnected with API
interface IPrivateRouteProps extends RouteProps {
  // roles: string[];
}

const roles = [AVAILABLE_ROLES.SUPERADMIN, AVAILABLE_ROLES.ADMIN];
const hasAccess = getPermission(roles);

export const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = ({ ...rest }) => {
  if (hasAccess) {
    return <Route {...rest} />;
  }

  return <Redirect to="/" />;
};

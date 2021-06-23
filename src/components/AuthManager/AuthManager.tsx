import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { User } from 'oidc-client';
import { useHistory, useLocation } from 'react-router-dom';
import { Loader } from 'components';
import { Logger, userManager } from '../../utils';
import { useGetCurrentUserLazyQuery } from '../../models/graphql';
import { IObjectLiteral } from '../../interfaces/object-literal.interface';
import { AVAILABLE_ROLES } from '../../utils/global/roles';
import useLocalStorage from '../../utils/hooks/useLocalStorage.hook';

export interface IAuthManagerProps {}

const AuthManager: React.FC<IAuthManagerProps> = ({ children }) => {
  const [localUser, setLocalUser] = useLocalStorage<User>('user');
  const [history, location] = [useHistory(), useLocation()];
  const [getCurrentUser, { data, loading, error }] = useGetCurrentUserLazyQuery({
    fetchPolicy: 'network-only',
  });

  const getRoles = (user: User) => {
    const { roles } = (jwtDecode(user.access_token) as IObjectLiteral).realm_access;

    if (
      !roles.includes(AVAILABLE_ROLES.ADMIN) &&
      !roles.includes(AVAILABLE_ROLES.AGENT) &&
      !roles.includes(AVAILABLE_ROLES.SUPERADMIN)
    ) {
      roles.push(AVAILABLE_ROLES.AGENT);
    }

    return roles;
  };

  useEffect(() => {
    if (!loading && !error && data && localUser) {
      localUser.profile.locale = data.getCurrentUser.locale as string | undefined;
      setLocalUser(localUser);
    }
  }, [data, loading, error]);

  useEffect(() => {
    userManager.events.addUserLoaded(userLoadedHandler);

    return () => userManager.events.removeUserLoaded(userLoadedHandler);
  });

  const userLoadedHandler = (newUser: User) => {
    newUser.profile.roles = getRoles(newUser);
    setLocalUser(newUser);
    getCurrentUser();
  };

  const redirectCallback = async () => {
    try {
      const user = await userManager.signinRedirectCallback();

      user.profile.roles = getRoles(user);

      setLocalUser(user);

      history.push(localStorage.getItem('redirectRoute') || '/');
    } catch (err) {
      Logger.error(err);

      userManager.signinRedirect();
    }
  };

  const silentRenewCallback = () => userManager.signinSilentCallback();

  const getUser = async () => {
    try {
      const user = await userManager.getUser();

      if (!user || user.expired) {
        await userManager.signinRedirect();
      } else {
        user.profile.roles = getRoles(user);

        setLocalUser(user);
        getCurrentUser();
      }

      localStorage.setItem('redirectRoute', location.pathname + location.search);
    } catch (err) {
      Logger.error(err);
    }
  };

  if (location.pathname.startsWith('/silent-renew')) {
    silentRenewCallback();

    return <Loader />;
  }

  if (!localUser) {
    if (location.pathname.startsWith('/auth-callback')) {
      redirectCallback();
    } else {
      getUser();
    }

    return <Loader />;
  }

  if (!children) {
    throw new Error('No children found in props');
  }

  return <>{children}</>;
};

export default AuthManager;

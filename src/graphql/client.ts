/* eslint-disable import/no-extraneous-dependencies */
import { ApolloClient, ApolloLink, from, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { getMainDefinition } from '@apollo/client/utilities';
import { v4 } from 'uuid';
import { OperationDefinitionNode } from 'graphql';
import { createUploadLink } from 'apollo-upload-client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import * as queryString from 'query-string';

import { StorageUtils, userManager, Logger } from '../utils';
import environment from '../environment';
import { cache } from './cache';

let uri = `wss://${environment.SUB_URL}/graphql`;
if (environment.ENVIRONMENT === 'development') {
  uri = `ws://localhost:3000/graphql-ws`;
}

let id: string;
const getNewId = () => {
  id = v4();

  return id;
};

const logout = () => {
  localStorage.removeItem('user');

  return userManager.signinRedirect();
};

const parsedQueryString = queryString.parse(window.location.search);
let { token } = parsedQueryString;

export const subscriptionClient = new SubscriptionClient(uri, {
  reconnect: true,
  timeout: 30000,
  inactivityTimeout: 5000,
  lazy: true,
  connectionParams: async () => {
    if (!token) {
      const user = await userManager.getUser();

      if (!user || user.expired) {
        if (!window.location.pathname.startsWith('/auth-callback')) {
          return userManager.signinRedirect();
        }
      } else {
        token = user.access_token;
      }
    }

    return {
      authToken: token ? `Bearer ${token}` : undefined,
      clientId: id == null ? getNewId() : id,
      selectedCustomer: parsedQueryString.customerId || StorageUtils.getCustomerId(),
    };
  },
});
const wsLink = new WebSocketLink(subscriptionClient);

const authLink = setContext(async (_, { headers }) => {
  const newHeaders = { ...headers };

  if (!token) {
    const user = await userManager.getUser();

    if (!user || user.expired) {
      if (!window.location.pathname.startsWith('/auth-callback')) {
        return userManager.signinRedirect();
      }
    } else {
      token = user.access_token;
    }
  }

  if (token) {
    newHeaders.Authorization = `Bearer ${token}`;
    newHeaders.selectedCustomer =
      parsedQueryString.customerId || localStorage.getItem('selectedCustomer');
    // newHeaders.selectedCustomer = '125' || localStorage.getItem('selectedCustomer');
  }

  return { headers: newHeaders };
});

const batchLink = new BatchHttpLink({
  batchKey: (operation) =>
    operation.operationName.toLowerCase().includes('conversation') ? 'slow' : 'normal',
});

const httpLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;

    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  from([authLink, batchLink]),
);

const uploadLink = ApolloLink.from([
  authLink,
  createUploadLink({ uri: `/graphql`, includeExtensions: true }),
]);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      if (extensions && extensions.exception) {
        if ([403, 401].includes(extensions.exception.status)) {
          return logout();
        }
      }

      if (message.toLowerCase().includes('access denied')) {
        return logout();
      }

      return Logger.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }

  if (networkError) {
    Logger.error(`[Network error]: ${networkError}`);
  }
});

const link = ApolloLink.split(
  (operation) => operation.getContext().hasUpload,
  uploadLink,
  httpLink,
);

export const client = new ApolloClient({
  link: from([errorLink, link]),
  cache,
  connectToDevTools: true,
});

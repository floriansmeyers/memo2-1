import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';
import TranslateIntlProvider from './translations/TranslateIntlProvider';
import MainRouter from './router/MainRouter';

import './styles/index.scss';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <TranslateIntlProvider>
      <MainRouter />
    </TranslateIntlProvider>
  </ApolloProvider>
);

export default App;

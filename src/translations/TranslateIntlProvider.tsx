import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { User } from 'oidc-client';
import { IntlProvider } from 'react-intl';
import { IWrapperProps } from 'utils';
import { appLanguageVar } from '../graphql/cache';
import useLocalStorage from '../utils/hooks/useLocalStorage.hook';

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/locale-data/de'); // Add locale data for de
}

const nlMsg = require('./messages/nl.json');
const enMsg = require('./messages/en.json');
const frMsg = require('./messages/fr.json');
const deMsg = require('./messages/de.json');

const loadedMessages = {
  nl: nlMsg,
  en: enMsg,
  fr: frMsg,
  de: deMsg,
};

const TranslateIntlProvider: React.FC<IWrapperProps> = ({ children }) => {
  const language = useReactiveVar(appLanguageVar);
  const [localUser] = useLocalStorage<User>('user');

  const userLanguage = localUser?.profile.locale;
  const currentLanguage = (language || userLanguage || 'nl') as keyof typeof loadedMessages;
  const messages = loadedMessages[currentLanguage];

  return (
    <IntlProvider
      onError={() => null}
      messages={messages}
      locale={currentLanguage}
      defaultLocale="nl"
    >
      {children}
    </IntlProvider>
  );
};

export default TranslateIntlProvider;

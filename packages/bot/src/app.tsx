import React from 'react';
import { getDefaultI18n, I18nProvider } from '@common_bot/i18n';
import { ApiProvider } from '@common_bot/api';
import { Provider } from './contexts';
import { Bot } from './bot';

const i18n = getDefaultI18n();

const App = () => (
  <ApiProvider>
    <I18nProvider i18n={i18n}>
      <Provider.User>
        <Bot />
      </Provider.User>
    </I18nProvider>
  </ApiProvider>
);

export { App };

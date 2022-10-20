import React from 'react';
import { getDefaultI18n, I18nProvider } from '@common_bot/i18n';
import { Bot } from './bot';

const i18n = getDefaultI18n();

const App = () => (
  <I18nProvider i18n={i18n}>
    <Bot />
  </I18nProvider>
);

export { App };

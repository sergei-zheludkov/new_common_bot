import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageEnum } from '@common_bot/shared';
import { resources } from './locales';

const getDefaultI18n = (config?: Partial<InitOptions>) => {
  i18n
    .use(initReactI18next)
    .init({
      lng: LanguageEnum.ENGLISH,
      fallbackLng: [LanguageEnum.ENGLISH, LanguageEnum.RUSSIAN],
      resources,
      ns: ['common'],
      defaultNS: 'common',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      ...config,
    });

  return i18n;
};

export { getDefaultI18n };

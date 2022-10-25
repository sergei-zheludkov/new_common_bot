import { LanguageEnum } from '@common_bot/shared';
import { en } from './en';
import { ru } from './ru';

const resources = {
  [LanguageEnum.ENGLISH]: en,
  [LanguageEnum.RUSSIAN]: ru,
};

export { resources };

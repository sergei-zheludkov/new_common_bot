import { LanguageEnum } from '../enums';

const isRussian = (lang: LanguageEnum) => lang === LanguageEnum.RUSSIAN;
const isEnglish = (lang: LanguageEnum) => lang === LanguageEnum.ENGLISH;

export { isRussian, isEnglish };

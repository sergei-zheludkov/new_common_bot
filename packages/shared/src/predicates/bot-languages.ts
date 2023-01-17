import { BotLanguageEnum } from '../enums';

const isRussian = (lang: BotLanguageEnum) => lang === BotLanguageEnum.RUSSIAN;
const isEnglish = (lang: BotLanguageEnum) => lang === BotLanguageEnum.ENGLISH;

export { isRussian, isEnglish };

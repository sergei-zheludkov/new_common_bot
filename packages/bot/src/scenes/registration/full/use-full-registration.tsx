import { useBotContext } from '@urban-bot/core';
import type { DialogAnswers, DialogValidation } from '@urban-bot/core';
import { useApi, useQuery, UserCreateDto } from '@common_bot/api';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { LANGUAGES, TIMEZONES } from '../../../constants';
import { LANG_KEY, GENDERS /* , GENDER_KEY, TIMEZONE_KEY, */ } from './constants';

type Props = {
  refId: string | null;
  getUser: () => void;
}

const useFullRegistration = ({ refId, getUser }: Props) => {
  const { t } = useTranslation('registration');
  const { switchToSceneGreeting } = useRouter();
  const { i18n } = useTranslation('lang');
  const { chat } = useBotContext();
  const { postUser } = useApi();
  const { fetch, isCalled, isSuccess } = useQuery('user', postUser, { isLazy: true });

  const handleSelectLanguage = async (lang: string) => {
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const selectedLang = lang as UserCreateDto['lang'];

    // TODO разобраться, почему не работает установка языка через onNext в процессе диалога
    await i18n.changeLanguage(selectedLang);
  };

  const createUser = async (answers: DialogAnswers) => {
    // const { [GENDER_KEY]: gender, [TIMEZONE_KEY]: timezone} = answers;
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const lang = answers[LANG_KEY] as unknown as UserCreateDto['lang'];

    const newUser = await fetch({
      id: chat.id,
      firstname: chat.firstName,
      lastname: chat.lastName,
      username: chat.username,
      who_invited_id: refId,
      lang,

      // TODO реализовать сохранение ключей
      // gender,
      // timezone,
    });

    if (!newUser) {
      return;
    }

    // setRegistered(true);
    await getUser();
    switchToSceneGreeting();
  };

  const isValidLanguage = (lang: string) => {
    const isValid = (LANGUAGES as Array<string>).includes(lang);

    if (isValid) {
      return undefined;
    }

    const title = t('error_title');
    const description = t('questions.language.error_description');

    return `${title}\n${description}`;
  };

  const isValidGender: DialogValidation = (gender) => {
    const isValid = gender === GENDERS.MALE || gender === GENDERS.FEMALE;

    if (isValid) {
      return undefined;
    }

    const title = t('error_title');
    const description = t('questions.gender.error_description');

    return `${title}\n${description}`;
  };

  const isValidTimezone = (timezone: string) => {
    const isValid = TIMEZONES.includes(Number(timezone));

    if (isValid) {
      return undefined;
    }

    const title = t('error_title');
    const description = t('questions.timezone.error_description');

    return `${title}\n${description}`;
  };

  return {
    isValidGender,
    isValidLanguage,
    isValidTimezone,

    isRegistered: isSuccess,
    isSentData: isCalled,

    handleSelectLanguage,
    createUser,
  };
};

export { useFullRegistration };

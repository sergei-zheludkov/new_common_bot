import { useEffect } from 'react';
import { BotLanguageEnum, hook } from '@common_bot/shared';
import { useApi, useQuery, UserCreateDto } from '@common_bot/api';
import { useUser } from '../../contexts';
import { LANGUAGES } from '../../constants';

const { useToggleState } = hook;

const useSettingsLanguage = () => {
  const { patchUser } = useApi();
  const { user, fetch: getUser } = useUser();
  const { fetch: updateUser, isSuccess: isSaved } = useQuery('update_user', patchUser, { isLazy: true });
  const {
    toggle: isChanging,
    toggleOn: handleChangingOn,
    toggleOff: handleChangingOff,
  } = useToggleState();

  // TODO зарефакторить as unknown as BotLanguageEnum через Хелперы
  const currentLang = user.lang as unknown as BotLanguageEnum;
  const availableLanguages = LANGUAGES.filter((lang) => lang !== currentLang);

  const handleSave = (lang: BotLanguageEnum) => async () => {
    await updateUser({
      id: user.id,
      // Такой финт из-за кривой генерации enum в @common_bot/api
      lang: lang as unknown as UserCreateDto['lang'],
    });

    // Necessary to send request to event_loop
    handleChangingOff();
  };

  useEffect(() => {
    if (isSaved) {
      setTimeout(getUser, 300);
    }
  }, [isSaved]);

  return {
    currentLang,
    availableLanguages,

    isChanging,
    isSaved,

    handleSave,
    handleChangingOn,
    handleChangingOff,
  };
};

export { useSettingsLanguage };

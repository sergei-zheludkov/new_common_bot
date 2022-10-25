import { useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery, UserCreateDto } from '@common_bot/api';
import { LanguageEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';

interface Props {
  refId: string | null;
  getUser: () => void;
  onFinish: () => void;
}

const useRegistration = ({ refId, getUser, onFinish }: Props) => {
  const [isRegistered, setRegistered] = useState(false);
  const { i18n } = useTranslation('lang');
  const { chat } = useBotContext();
  const { postUser } = useApi();
  const { fetch, isCalled } = useQuery('user', postUser, { isLazy: true });

  const createUser = async (lang: LanguageEnum) => {
    const newUser = await fetch({
      id: chat.id,
      firstname: chat.firstName,
      lastname: chat.lastName,
      username: chat.username,
      who_invited: refId,
      // Такой финт из-за кривой генерации enum в @common_bot/api
      lang: lang as unknown as UserCreateDto['lang'],
    });

    if (!newUser) {
      return;
    }

    setRegistered(true);
    await i18n.changeLanguage(lang);
    await getUser();
    onFinish();
  };

  return {
    isRegistered,
    isSentData: isCalled,
    createUser,
  };
};

export { useRegistration };

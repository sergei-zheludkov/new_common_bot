import { useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery, UserCreateDto } from '@common_bot/api';
import { LanguageEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useUser } from '../../contexts/user';

interface Props {
  refId: string | null;
  onExit: () => void;
}

const useRegistration = ({ refId, onExit }: Props) => {
  const [isRegistered, setRegistered] = useState(false);
  const { i18n } = useTranslation('lang');
  const { chat } = useBotContext();
  const { fetch: getUser } = useUser();
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
    onExit();
  };

  return {
    isRegistered,
    isSentData: isCalled,
    createUser,
  };
};

export { useRegistration };

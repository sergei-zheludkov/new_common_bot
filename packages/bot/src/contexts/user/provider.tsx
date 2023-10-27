/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { useBotContext, useCommand } from '@urban-bot/core';
import { useApi, useQuery, predicates } from '@common_bot/api';
import { useTranslation } from '@common_bot/i18n';
import { Registration } from '../../scenes';
import { saveChat, getChatsMap } from '../../local-storage';
import { useRouter } from '../router';
import { Context } from './context';
import type { ProviderProps, ContextState } from './types';

const { isNotFoundError } = predicates;

const UserProvider = ({ children }: ProviderProps) => {
  const [referralId, setReferralId] = useState<ContextState['referralId']>(null);
  const { i18n } = useTranslation('common');
  const { switchToSceneGreeting } = useRouter();
  const { chat } = useBotContext();
  const { getOneUser } = useApi();
  const {
    data: user,
    isCalled,
    isLoading,
    isSuccess,
    isError,
    statusCode,
    fetch,
  } = useQuery(
    'get_one_user',
    () => getOneUser(chat.id),
    { isLazy: true },
  );

  const isUserNotFound = isCalled && isError && isNotFoundError(statusCode);
  const isUserLoaded = isCalled && !isLoading && isSuccess && !!user;

  useCommand(({ argument }) => {
    if (argument) {
      setReferralId(argument);
    }
    if (isUserLoaded) {
      switchToSceneGreeting();
    }

    fetch();
  }, '/start');

  useEffect(() => {
    const userInStore = getChatsMap()[chat.id];
    if (userInStore) {
      switchToSceneGreeting();
    }
    if (!isUserLoaded) {
      fetch();
    }
  }, []);

  useEffect(() => {
    saveChat(chat);
  }, [chat]);

  useEffect(() => {
    if (user) {
      i18n.changeLanguage(user?.lang);
    }
  }, [user]);

  if (isUserNotFound) {
    return <Registration refId={referralId} getUser={fetch} />;
  }

  if (isUserLoaded) {
    return (
      <Context.Provider
        value={{
          referralId,
          user,
          isCalled,
          isLoading,
          isSuccess,
          isError,
          statusCode,
          fetch,
        }}
      >
        {children}
      </Context.Provider>
    );
  }

  return null;
};

export { UserProvider };

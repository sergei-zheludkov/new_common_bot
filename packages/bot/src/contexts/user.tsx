/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { useBotContext, useCommand } from '@urban-bot/core';
import { useApi, useQuery, predicates } from '@common_bot/api';
import type { UserEntity } from '@common_bot/api';
import { Registration } from '../scenes';
import { useRouter } from './router';
import { saveChat, getChatsMap } from '../local-storage';

const { isNotFoundError } = predicates;

interface User {
  referralId: string | null;
  user: UserEntity;
  fetch: () => void;
  isCalled: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  statusCode?: number;
}

const UserContext = createContext({} as User);

type UserProviderProps = {
  children: React.ReactNode;
};

const User = ({ children }: UserProviderProps) => {
  const [referralId, setReferralId] = useState<User['referralId']>(null);

  const { switchToSceneGreeting } = useRouter();
  const { chat } = useBotContext();
  const { getUser } = useApi();
  const {
    data: user,
    isCalled,
    isLoading,
    isSuccess,
    isError,
    statusCode,
    fetch,
  } = useQuery(
    'user',
    () => getUser(chat.id),
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

  if (isUserNotFound) {
    return <Registration refId={referralId} getUser={fetch} />;
  }

  if (isUserLoaded) {
    return (
      <UserContext.Provider
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
      </UserContext.Provider>
    );
  }

  return null;
};

const useUser = () => useContext(UserContext);

export { User, useUser };

import React, { createContext, useContext, useMemo } from 'react';
import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';
import type { UserEntity } from '@common_bot/api';

interface User {
  user?: UserEntity;
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

  const data = useMemo(
    () => ({
      user,
      isCalled,
      isLoading,
      isSuccess,
      isError,
      statusCode,
      fetch,
    }),
    [
      user,
      isCalled,
      isLoading,
      isSuccess,
      isError,
      statusCode,
      fetch,
    ],
  );

  return (
    <UserContext.Provider value={data}>{children}</UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { User, useUser };

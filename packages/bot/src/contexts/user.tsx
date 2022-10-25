/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
  // useMemo,
  useState,
} from 'react';
import { useBotContext, useCommand } from '@urban-bot/core';
import { useApi, useQuery, predicates } from '@common_bot/api';
import type { UserEntity } from '@common_bot/api';
import { Registration } from '../scenes';
import { useRouter } from './router';

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

  const { handleMenuMain } = useRouter();
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
  } = useQuery('user', () => getUser(chat.id));

  useCommand(({ argument }) => {
    if (argument) setReferralId(argument);
  }, '/start');

  // useEffect(() => {
  //   saveChat(chat);
  // }, [chat]);

  // useEffect(() => {
  //   const user = getChatsMap()[chat.id];
  //   if (!user) setScene(T.ScenesEnum.AUTH); // useQuery lazy
  //   else setScene(T.ScenesEnum.UPDATE_BOT);
  // }, []);

  const isUserNotFound = isCalled && isError && isNotFoundError(statusCode);
  const isUserLoaded = isCalled && !isLoading && isSuccess && user;

  if (isUserNotFound) {
    return <Registration refId={referralId} getUser={fetch} onFinish={handleMenuMain} />;
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

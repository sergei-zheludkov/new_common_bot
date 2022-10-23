import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery, predicates } from '@common_bot/api';

const { isNotFoundError } = predicates;

const useAuthentication = () => {
  const { chat } = useBotContext();
  const { getUser } = useApi();
  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    statusCode,
  } = useQuery('user', () => getUser(chat.id));

  const isUserNotFound = isError && isNotFoundError(statusCode);
  const isUserLoaded = !isLoading && isSuccess && user;

  return {
    isLoading,
    isUserLoaded,
    isUserNotFound,
  };
};

export { useAuthentication };

import { useEffect } from 'react';
import { predicates } from '@common_bot/api';
import { useUser } from '../../contexts/user';

const { isNotFoundError } = predicates;

const useAuthentication = () => {
  const {
    fetch,
    user,
    isCalled,
    isLoading,
    isSuccess,
    isError,
    statusCode,
  } = useUser();

  useEffect(() => {
    (async () => {
      await fetch();
    })();
  }, []);

  const isUserNotFound = isCalled && isError && isNotFoundError(statusCode);
  const isUserLoaded = isCalled && !isLoading && isSuccess && user;

  return {
    isUserLoaded,
    isUserNotFound,
  };
};

export { useAuthentication };

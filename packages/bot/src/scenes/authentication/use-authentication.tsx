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

  const isUserNotFound = isCalled && isError && isNotFoundError(statusCode);
  const isUserLoaded = isCalled && !isLoading && isSuccess && user;

  useEffect(() => {
    if (isUserLoaded) {
      return;
    }

    (async () => {
      await fetch();
    })();
  }, []);

  return {
    isUserLoaded,
    isUserNotFound,
  };
};

export { useAuthentication };

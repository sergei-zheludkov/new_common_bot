import React, { useEffect } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useAuthentication } from './use-authentication';

interface AuthenticationProps {
  onSuccess: () => void;
  onFailed: () => void;
}

const Authentication = ({ onSuccess, onFailed }: AuthenticationProps) => {
  const { t } = useTranslation();
  const { isUserLoaded, isUserNotFound } = useAuthentication();

  useEffect(() => {
    if (isUserNotFound) {
      onFailed();
    }
    if (isUserLoaded) {
      setTimeout(() => onSuccess(), 1000);
    }
  }, [isUserLoaded, isUserNotFound]);

  if (isUserLoaded) {
    return <Text>{t('greeting')}</Text>;
  }

  return null;
};

export { Authentication };

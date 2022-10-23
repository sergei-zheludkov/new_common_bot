import React from 'react';
import { ButtonGroup, Button, Text } from '@urban-bot/core';
import { useTranslation, Languages } from '@common_bot/i18n';
import { useRegistration } from './use-registration';
import type { Lang } from './use-registration';

interface Props {
  refId: string | null;
  onExit: () => void;
}

const Registration = ({ refId, onExit }: Props) => {
  const { t } = useTranslation('lang');
  const { isRegistered, isSentData, createUser } = useRegistration({ refId, onExit });

  if (isRegistered) {
    return <Text>{t('success')}</Text>;
  }

  if (!isRegistered && isSentData) {
    // TODO сообщение об ошибке и просьба написать в поддержку
  }

  const createWithRussianLang = async () => {
    await createUser('ru' as Lang);
  };
  const createWithEnglishLang = async () => {
    await createUser('en' as Lang);
  };

  if (!isRegistered && !isSentData) {
    return (
      <ButtonGroup isResizedKeyboard isNewMessageEveryRender={false} title={t('message')}>
        <Button onClick={createWithRussianLang}>{t(Languages.RUSSIAN)}</Button>
        <Button onClick={createWithEnglishLang}>{t(Languages.ENGLISH)}</Button>
      </ButtonGroup>
    );
  }

  return null;
};

export { Registration };

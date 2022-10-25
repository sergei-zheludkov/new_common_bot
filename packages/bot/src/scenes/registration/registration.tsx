import React from 'react';
import { ButtonGroup, Button, Text } from '@urban-bot/core';
import { LanguageEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useRegistration } from './use-registration';

interface Props {
  refId: string | null;
  getUser: () => void;
  onFinish: () => void;
}

const Registration = ({ refId, getUser, onFinish }: Props) => {
  const { t } = useTranslation('lang');
  const {
    isRegistered,
    isSentData,
    createUser,
  } = useRegistration({
    refId,
    getUser,
    onFinish,
  });

  if (isRegistered) {
    return <Text>{t('success')}</Text>;
  }

  if (!isRegistered && isSentData) {
    // TODO сообщение об ошибке и просьба написать в поддержку
  }

  const createWithRussianLang = async () => {
    await createUser(LanguageEnum.RUSSIAN);
  };
  const createWithEnglishLang = async () => {
    await createUser(LanguageEnum.ENGLISH);
  };

  if (!isRegistered && !isSentData) {
    return (
      <ButtonGroup isResizedKeyboard isNewMessageEveryRender={false} title={t('message')}>
        <Button onClick={createWithRussianLang}>{t(LanguageEnum.RUSSIAN)}</Button>
        <Button onClick={createWithEnglishLang}>{t(LanguageEnum.ENGLISH)}</Button>
      </ButtonGroup>
    );
  }

  return null;
};

export { Registration };

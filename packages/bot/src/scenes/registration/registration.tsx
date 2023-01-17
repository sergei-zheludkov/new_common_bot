import React from 'react';
import { ButtonGroup, Button, Text } from '@urban-bot/core';
import { BotLanguageEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useRegistration } from './use-registration';

interface Props {
  refId: string | null;
  getUser: () => void;
}

const Registration = ({ refId, getUser }: Props) => {
  const { t } = useTranslation('lang');
  const {
    isRegistered,
    isSentData,
    createUser,
  } = useRegistration({
    refId,
    getUser,
  });

  if (isRegistered) {
    return <Text>{t('success')}</Text>;
  }

  if (!isRegistered && isSentData) {
    // TODO сообщение об ошибке и просьба написать в поддержку
  }

  const createWithRussianLang = async () => {
    await createUser(BotLanguageEnum.RUSSIAN);
  };
  const createWithEnglishLang = async () => {
    await createUser(BotLanguageEnum.ENGLISH);
  };

  if (!isRegistered && !isSentData) {
    return (
      <ButtonGroup
        isResizedKeyboard
        isNewMessageEveryRender={false}
        title={t('message')}
      >
        <Button onClick={createWithRussianLang}>
          {t(BotLanguageEnum.RUSSIAN)}
        </Button>
        <Button onClick={createWithEnglishLang}>
          {t(BotLanguageEnum.ENGLISH)}
        </Button>
      </ButtonGroup>
    );
  }

  return null;
};

export { Registration };

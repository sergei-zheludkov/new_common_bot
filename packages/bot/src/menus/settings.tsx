import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../contexts';

const Settings = () => {
  const {
    switchToSceneLanguage,
    switchToSceneNotifications,
    switchToMenuMain,
  } = useRouter();
  const { t } = useTranslation(['buttons', 'common']);

  useText(switchToSceneLanguage, t('languages'));
  useText(switchToSceneNotifications, t('notifications'));
  useText(switchToMenuMain, t('back'));

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t('common:settings_menu')}
    >
      <Button>{t('languages')}</Button>
      <Button>{t('notifications')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Settings };

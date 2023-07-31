import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../contexts';

const Settings = () => {
  const {
    switchToSceneSettingsLanguage,
    switchToSceneSettingsReminders,
    switchToMenuMain,
  } = useRouter();
  const { t } = useTranslation(['buttons', 'common']);

  /* ---------- BUTTON HOOKS ---------- */
  const languages = t('languages');
  useText(switchToSceneSettingsLanguage, languages);

  const reminders = t('reminders');
  useText(switchToSceneSettingsReminders, reminders);

  const back = t('back');
  useText(switchToMenuMain, back);
  /* --------------------------------- */

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t('common:settings_menu')}
    >
      <Button>{t('languages')}</Button>
      <Button>{t('reminders')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Settings };

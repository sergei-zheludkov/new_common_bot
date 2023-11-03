import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../contexts';

const Settings = () => {
  const { t } = useTranslation(['buttons', 'common']);
  const {
    switchToSceneSettingsLanguage,
    switchToSceneSettingsTimezone,
    // switchToSceneSettingsReminders,
    switchToMenuMain,
  } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const language = t('language');
  useText(switchToSceneSettingsLanguage, language);

  const timezone = t('timezone');
  useText(switchToSceneSettingsTimezone, timezone);

  // const reminders = t('reminders');
  // useText(switchToSceneSettingsReminders, reminders);

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
      <Button>{language}</Button>
      <Button>{timezone}</Button>
      {/* <Button>{reminders}</Button> */}
      <Button>{back}</Button>
    </ButtonGroup>
  );
};

export { Settings };

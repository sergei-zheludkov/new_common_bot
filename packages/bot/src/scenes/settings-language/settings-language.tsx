import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter, useUser } from '../../contexts';
import { useSettingsLanguage } from './use-settings-language';

const SettingsLanguage = () => {
  const { switchToMenuSettings } = useRouter();
  const { t } = useTranslation('lang');
  const {
    availableLanguages,
    isChanging,
    handleSave,
    handleChangingOn,
    handleChangingOff,
  } = useSettingsLanguage();
  const { user } = useUser();

  const languageButtons = availableLanguages.map((language) => (
    <Button key={language} onClick={handleSave(language)}>{t(language)}</Button>
  ));

  const changeButton = [
    (<Button key="change" onClick={handleChangingOn}>{t('buttons:change')}</Button>),
  ];

  const backToLanguagesButton = [
    (<Button key="back" onClick={handleChangingOff}>{t('buttons:back')}</Button>),
  ];

  const backToSettingsButton = [
    (<Button key="back" onClick={switchToMenuSettings}>{t('buttons:back')}</Button>),
  ];

  const title = isChanging ? t('choose') : `${t('used')}${t(user.lang)}`;

  const buttons = isChanging
    ? [...languageButtons, ...backToLanguagesButton]
    : [...changeButton, ...backToSettingsButton];

  return (
    <ButtonGroup
      title={title}
      isNewMessageEveryRender={false}
      maxColumns={1}
    >
      {buttons}
    </ButtonGroup>
  );
};

export { SettingsLanguage };

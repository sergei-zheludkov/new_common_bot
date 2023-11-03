import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { useSettingsLanguage } from './use-settings-language';

const SettingsLanguage = () => {
  const { switchToMenuSettings } = useRouter();
  const { t } = useTranslation('settings');
  const {
    currentLang,
    availableLanguages,
    isChanging,
    handleSave,
    handleChangingOn,
    handleChangingOff,
  } = useSettingsLanguage();

  const languageButtons = availableLanguages.map((language) => (
    <Button key={language} onClick={handleSave(language)}>
      {t(`buttons:${language}`)}
    </Button>
  ));

  const changeButton = (
    <Button key="change-language" onClick={handleChangingOn}>
      {t('buttons:change')}
    </Button>
  );

  const backToLanguageSettingsButton = (
    <Button key="back-to-language-settings" onClick={handleChangingOff}>
      {t('buttons:back')}
    </Button>
  );

  const backToSettingsButton = (
    <Button key="back-to-settings" onClick={switchToMenuSettings}>
      {t('buttons:back')}
    </Button>
  );

  const activeLang = t(`buttons:${currentLang}`);
  const title = isChanging
    ? t('language.choose')
    : `${t('language.used')}${activeLang}`;

  const buttons = isChanging
    ? [...languageButtons, backToLanguageSettingsButton]
    : [changeButton, backToSettingsButton];

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

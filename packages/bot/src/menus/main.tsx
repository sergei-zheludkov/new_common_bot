import React from 'react';
import {
  ButtonGroup,
  Button,
  useText,
  useCommand,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../contexts';

interface MainMenuProps {
  useMain: () => { message: string };
}

export const Main = ({ useMain }: MainMenuProps) => {
  const {
    switchToMenuAdmin,
    switchToMenuBalance,
    switchToMenuReferral,
    switchToMenuSettings,
    switchToSceneFeedback,
    switchToSceneRules,
  } = useRouter();
  const { t } = useTranslation('buttons');
  const { message } = useMain();

  useCommand(switchToMenuAdmin, '/admin');
  useText(switchToMenuBalance, t('balance'));
  useText(switchToMenuReferral, t('referral'));
  useText(switchToMenuSettings, t('settings'));
  useText(switchToSceneFeedback, t('feedback'));
  useText(switchToSceneRules, t('rules'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t(message)}>
      <Button>{t('balance')}</Button>
      <Button>{t('referral')}</Button>
      <Button>{t('settings')}</Button>
      <Button>{t('feedback')}</Button>
      <Button>{t('rules')}</Button>
    </ButtonGroup>
  );
};

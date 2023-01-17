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

  /* ---------- BUTTON HOOKS ---------- */
  useCommand(switchToMenuAdmin, '/admin');

  const balance = t('balance');
  useText(switchToMenuBalance, balance);

  const referral = t('referral');
  useText(switchToMenuReferral, referral);

  const settings = t('settings');
  useText(switchToMenuSettings, settings);

  const feedback = t('feedback');
  useText(switchToSceneFeedback, feedback);

  const rules = t('rules');
  useText(switchToSceneRules, rules);
  /* --------------------------------- */

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

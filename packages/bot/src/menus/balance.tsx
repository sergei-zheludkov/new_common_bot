import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useUser, useRouter } from '../contexts';

export const Balance = () => {
  const {
    switchToSceneInputMoney,
    switchToSceneAllPayments,
    switchToMenuMain,
  } = useRouter();
  const { t } = useTranslation(['buttons', 'balance']);
  const { user } = useUser();

  useText(switchToSceneInputMoney, t('input_money'));
  useText(switchToSceneAllPayments, t('all_payments'));
  useText(switchToMenuMain, t('back'));

  const message = (
    <>
      {t('common:balance')}
      &#32;
      <b>{user.balance}</b>
      &#32;
      $
    </>
  );

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={message}>
      <Button>{t('input_money')}</Button>
      <Button>{t('all_payments')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

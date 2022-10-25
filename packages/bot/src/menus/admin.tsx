import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { predicates, RoleEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useUser } from '../contexts';

const { roles: { isAdmin } } = predicates;

interface Props {
  onWallets: () => void;
  onStatistic: () => void;
  onBack: () => void;
}

const Admin = ({ onWallets, onStatistic, onBack }: Props) => {
  const { t } = useTranslation('buttons');
  const { user } = useUser();
  const role = user.role as unknown as RoleEnum;

  useText(onWallets, t('wallets'));
  useText(onStatistic, t('statistic'));
  useText(onBack, t('back'));

  if (isAdmin(role)) {
    return (
      <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('admin_menu:message')}>
        <Button>{t('wallets')}</Button>
        <Button>{t('statistic')}</Button>
        <Button>{t('back')}</Button>
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('admin_menu:error')}>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Admin };

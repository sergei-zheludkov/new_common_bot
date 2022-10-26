import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { predicates, RoleEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useUser, useRouter } from '../contexts';

const { roles: { isAdmin } } = predicates;

const Admin = () => {
  const {
    switchToMenuWallets,
    switchToMenuAdminStatistics,
    switchToMenuMain,
  } = useRouter();
  const { t } = useTranslation('buttons');
  const { user } = useUser();
  const role = user.role as unknown as RoleEnum;
  const isUserAdmin = isAdmin(role);

  const handleSwitchToMenuWallets = () => {
    if (isUserAdmin) {
      switchToMenuWallets();
    }
  };

  const handleSwitchToMenuAdminStatistics = () => {
    if (isUserAdmin) {
      switchToMenuAdminStatistics();
    }
  };

  useText(handleSwitchToMenuWallets, t('wallets'));
  useText(handleSwitchToMenuAdminStatistics, t('statistics'));
  useText(switchToMenuMain, t('back'));

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t(isUserAdmin ? 'admin_menu:message' : 'admin_menu:error')}
    >
      {isUserAdmin && <Button>{t('wallets')}</Button>}
      {isUserAdmin && <Button>{t('statistics')}</Button>}
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Admin };

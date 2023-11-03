import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { predicates, RoleEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useUser, useRouter } from '../contexts';

const { ROLES: { isAdmin } } = predicates;

const Admin = () => {
  const {
    // switchToMenuAdminStatistics,
    switchToMenuMain,
  } = useRouter();
  const { t } = useTranslation('buttons');
  const { user } = useUser();
  const role = user.role as unknown as RoleEnum;
  const isUserAdmin = isAdmin(role);

  /* ---------- BUTTON HOOKS ---------- */

  const back = t('back');
  useText(switchToMenuMain, back);
  /* --------------------------------- */

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t(isUserAdmin ? 'admin_menu:message' : 'admin_menu:error')}
    >
      {/* {isUserAdmin && <Button>{t('')}</Button>} */}
      <Button>{back}</Button>
    </ButtonGroup>
  );
};

export { Admin };

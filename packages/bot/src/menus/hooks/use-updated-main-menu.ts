// import { useEffect } from 'react';
import { useTranslation } from '@common_bot/i18n';
// import { Hook } from '../../contexts';
import { Main } from '../main';

type UseUpdatedMainMenu = Parameters<typeof Main>[0]['useMain'];

const useUpdatedMainMenu: UseUpdatedMainMenu = () => {
  const { t } = useTranslation('common');

  return { message: t('update_message') };
};

export { useUpdatedMainMenu };

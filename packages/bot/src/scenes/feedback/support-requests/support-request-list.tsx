import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { Loading } from '../../../components';
import { getRequestListItemParams } from '../helpers';
import { useSupportRequestList } from './use-support-request-list';

type Props = {
  onOpen: (id: string) => void;
};

const SupportRequestList = ({ onOpen }: Props) => {
  const { switchToMenuSupport } = useRouter();
  const { t } = useTranslation('feedback');
  const {
    status: page,
    shortSupportNotes = [],
    isSceneLoading,
    isEmptyList,
    handleChangeStatus,
  } = useSupportRequestList();

  if (isSceneLoading) {
    return <Loading />;
  }

  const requestButtons = shortSupportNotes.map(({
    id, text, type, status, created: date,
  }) => {
    const { title, handleOpen } = getRequestListItemParams({
      id, text, type, status, date, onClick: onOpen,
    });

    return <Button key={id} onClick={handleOpen}>{title}</Button>;
  });

  const statusButtonTitle = `=== ${t(`buttons:feedback_${page}_status`)} ===`;

  const statusButton = (
    <Button key="status" onClick={handleChangeStatus}>
      {statusButtonTitle}
    </Button>
  );

  const backToSupportMenuButton = (
    <Button key="back-to-feedback" onClick={switchToMenuSupport}>
      {t('buttons:back')}
    </Button>
  );

  const listTitle = isEmptyList ? t('empty_request_list') : t('request_list');

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={listTitle} maxColumns={1}>
      {[statusButton, ...requestButtons, backToSupportMenuButton]}
    </ButtonGroup>
  );
};

export { SupportRequestList };

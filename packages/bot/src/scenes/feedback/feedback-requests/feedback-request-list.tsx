import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { Loading } from '../../../components';
import { getRequestListItemParams } from '../helpers';
import { useFeedbackRequestList } from './use-feedback-request-list';

type Props = {
  onOpen: (id: string) => void;
};

const FeedbackRequestList = ({ onOpen }: Props) => {
  const { switchToMenuFeedback } = useRouter();
  const { t } = useTranslation('feedback');
  const { shortFeedbackNotes, isSceneLoading, isEmptyList } = useFeedbackRequestList();

  if (isSceneLoading || !shortFeedbackNotes) {
    return <Loading />;
  }

  const listTitle = isEmptyList ? t('empty_request_list') : t('last_request_list');

  const requestButtons = shortFeedbackNotes.map(({
    id, text, type, status, created: date,
  }) => {
    const { title, handleOpen } = getRequestListItemParams({
      id, text, type, status, date, onClick: onOpen,
    });

    return <Button key={id} onClick={handleOpen}>{title}</Button>;
  });

  const backToFeedbackMenuButton = (
    <Button key="back-to-feedback" onClick={switchToMenuFeedback}>
      {t('buttons:back')}
    </Button>
  );

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={listTitle} maxColumns={1}>
      {[...requestButtons, backToFeedbackMenuButton]}
    </ButtonGroup>
  );
};

export { FeedbackRequestList };

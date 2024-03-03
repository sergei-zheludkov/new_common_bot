import React, { useEffect } from 'react';
import { Button, ButtonGroup, Text } from '@urban-bot/core';
import { DATE, PREDICATES } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { Loading } from '../../../components';
import { SupportRequestItem } from './support-request-item';
import { useSupportRequest } from './use-support-request';

const { isFeedbackStatusWaiting, isFeedbackStatusProcessing } = PREDICATES.FEEDBACK_STATUS;
const { getFormattedDate } = DATE;

type Props = {
  id: string;
  onClose: () => void;
};

const SupportRequestController = ({ id, onClose }: Props) => {
  const { t } = useTranslation('feedback');
  const {
    supportNote,
    currentStatus,
    isStatusChanged,
    getSupportNote,
    handleRequestTakeIntoWork,
    handleRequestDone,
  } = useSupportRequest();

  const onRequestTakeIntoWork = () => handleRequestTakeIntoWork(id);
  const onRequestDone = () => handleRequestDone(id);

  useEffect(() => {
    getSupportNote(id);
  }, [id]);

  if (!supportNote) {
    return <Loading />;
  }

  if (isStatusChanged && isFeedbackStatusWaiting(currentStatus)) {
    return <Text>{t('request_has_been_taken')}</Text>;
  }

  if (isStatusChanged && isFeedbackStatusProcessing(currentStatus)) {
    return <Text>{t('request_has_been_done')}</Text>;
  }

  const date = getFormattedDate(supportNote.created, 'HH:mm DD.MM.YY');
  const user_name = `${supportNote.user?.firstname ?? ''} ${supportNote.user?.lastname ?? ''}`.trim();
  const title = t('user_request', { user_name, date });

  const requestTakeIntoWorkButton = (
    <Button key="take-into-work" onClick={onRequestTakeIntoWork}>
      {t('buttons:take_into_work')}
    </Button>
  );

  const requestDoneButton = (
    <Button key="processed" onClick={onRequestDone}>
      {t('buttons:processed')}
    </Button>
  );

  const backButton = (
    <Button key="back-to-request-list" onClick={onClose}>
      {t('buttons:back')}
    </Button>
  );

  return (
    <>
      <SupportRequestItem supportNote={supportNote} />
      <ButtonGroup isNewMessageEveryRender={false} title={title} maxColumns={1}>
        {isFeedbackStatusWaiting(currentStatus) && requestTakeIntoWorkButton}
        {isFeedbackStatusProcessing(currentStatus) && requestDoneButton}
        {backButton}
      </ButtonGroup>
    </>
  );
};

export { SupportRequestController };

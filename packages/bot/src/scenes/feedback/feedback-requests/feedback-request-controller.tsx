import React, { useEffect } from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { DATE } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { Loading } from '../../../components';
import { FeedbackRequestItem } from './feedback-request-item';
import { useFeedbackRequest } from './use-feedback-request';

const { getFormattedDate } = DATE;

type Props = {
  id: string;
  onClose: () => void;
};

const FeedbackRequestController = ({ id, onClose }: Props) => {
  const { t } = useTranslation('feedback');
  const { feedbackNote, getFeedbackNote } = useFeedbackRequest();

  useEffect(() => {
    getFeedbackNote(id);
  }, [id]);

  if (!feedbackNote) {
    return <Loading />;
  }

  const date = getFormattedDate(feedbackNote.created, 'HH:mm DD.MM.YY');
  const title = t('your_request', { date });
  const backButton = (
    <Button key="back-to-request-list" onClick={onClose}>
      {t('buttons:back')}
    </Button>
  );

  return (
    <>
      <FeedbackRequestItem feedbackNote={feedbackNote} />
      <ButtonGroup isNewMessageEveryRender={false} title={title}>
        {backButton}
      </ButtonGroup>
    </>
  );
};

export { FeedbackRequestController };

import { useEffect, useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import { FeedbackStatusEnum, PREDICATES } from '@common_bot/shared';
import { useApi, useQuery } from '@common_bot/api';
import type { UrbanBotTelegram } from '@urban-bot/telegram';

const { isFeedbackStatusWaiting /* isFeedbackStatusProcessing */ } = PREDICATES.FEEDBACK_STATUS;

const useSupportRequestList = () => {
  const { chat } = useBotContext<UrbanBotTelegram>();
  const { getFeedbackNotes: getSupportNotesApi } = useApi().feedback;
  const [status, setStatus] = useState(FeedbackStatusEnum.WAITING);

  const getSupportNotesApiCallback = (newStatus: FeedbackStatusEnum) => getSupportNotesApi(
    'ASC',
    newStatus,
    '',
    '',
    'short',
    0,
    10,
  );

  const {
    data: shortSupportNotes,
    isCalled: isShortSupportNotesCalled,
    // isLoading: isShortSupportNotesLoading,
    isSuccess: isShortSupportNotesSuccess,
    // isError: isShortSupportNotesError,
    // statusCode: shortSupportNotesStatusCode,
    fetch: getShortSupportNotes,
  } = useQuery('get_short_support_notes', getSupportNotesApiCallback, { isLazy: true });

  const isEmptyList = !shortSupportNotes?.length;
  const isSceneLoading = !isShortSupportNotesCalled && !isShortSupportNotesSuccess;

  const handleChangeStatus = () => {
    setStatus((prevStatus) => {
      if (isFeedbackStatusWaiting(prevStatus)) {
        return FeedbackStatusEnum.PROCESSING;
      }
      return FeedbackStatusEnum.WAITING;
    });
  };

  useEffect(() => {
    getShortSupportNotes(status);
  }, [status]);

  return {
    status,
    shortSupportNotes,
    isSceneLoading,
    isEmptyList,
    handleChangeStatus,
  };
};

export { useSupportRequestList };

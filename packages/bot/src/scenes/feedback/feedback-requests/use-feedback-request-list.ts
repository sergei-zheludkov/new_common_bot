import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';
import type { UrbanBotTelegram } from '@urban-bot/telegram';

const useFeedbackRequestList = () => {
  const { chat } = useBotContext<UrbanBotTelegram>();
  const { getFeedbackNotes: getFeedbackNotesApi } = useApi().feedback;
  const getFeedbackNotesApiCallback = () => getFeedbackNotesApi(
    'DESC',
    '',
    chat.id,
    '',
    'short',
    0,
    10,
  );

  const {
    data: shortFeedbackNotes,
    // isCalled: isShortFeedbackNotesCalled,
    // isLoading: isShortFeedbackNotesLoading,
    isSuccess: isShortFeedbackNotesSuccess,
    // isError: isShortFeedbackNotesError,
    // statusCode: shortFeedbackNotesStatusCode,
  } = useQuery('get_short_feedback_notes', getFeedbackNotesApiCallback);

  const isEmptyList = !shortFeedbackNotes?.length;
  const isSceneLoading = !isShortFeedbackNotesSuccess;

  return {
    shortFeedbackNotes,
    isSceneLoading,
    isEmptyList,
  };
};

export { useFeedbackRequestList };

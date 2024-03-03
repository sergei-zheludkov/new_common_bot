import { useApi, useQuery } from '@common_bot/api';

const useFeedbackRequest = () => {
  // const { chat } = useBotContext<UrbanBotTelegram>();
  const { getOneFeedbackNote: getOneFeedbackNoteApi } = useApi().feedback;

  const {
    data: feedbackNote,
    // isCalled: isFeedbackNoteCalled,
    // isLoading: isFeedbackNoteLoading,
    isSuccess: isFeedbackNoteSuccess,
    // isError: isShortFeedbackNotesError,
    // statusCode: shortFeedbackNotesStatusCode,
    fetch: getFeedbackNote,
  } = useQuery('get_feedback_note', getOneFeedbackNoteApi, { isLazy: true });

  const isSceneLoading = !isFeedbackNoteSuccess;

  return {
    feedbackNote,
    isSceneLoading,
    getFeedbackNote,
  };
};

export { useFeedbackRequest };

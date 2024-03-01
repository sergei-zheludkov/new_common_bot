import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';

const useFeedbackMenu = () => {
  const { chat } = useBotContext();
  const { getFeedbackDailyLimits: getFeedbackDailyLimitsApi } = useApi().feedback;
  const {
    // isCalled: isGetCalled,
    // isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    // isError: isGetError,
    // statusCode: getStatusCode,
    data,
  } = useQuery('get_feedback_daily_limits', () => getFeedbackDailyLimitsApi(chat.id));

  return {
    availableCount: data,
    isAvailableToWriteFeedback: !!data,
    // isGetCalled,
    // isGetLoading,
    isGetSuccess,
    // isGetError,
    // getStatusCode,
  };
};

export { useFeedbackMenu };

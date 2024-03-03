import { useApi, useQuery } from '@common_bot/api';
import {
  DATE, PREDICATES, FeedbackStatusEnum, RoleEnum,
} from '@common_bot/shared';
import { useUser } from '../../contexts';
import { getFeedbackCount } from '../../providers';

const { getTodayStart } = DATE;
const { ROLES: { isAdmin, isSupport } } = PREDICATES;

const useSupportMenu = () => {
  const { user } = useUser();
  const { getFeedbackCount: getFeedbackCountApi } = useApi().feedback;

  const todayStart = getTodayStart().toISOString();
  const getTotalFeedbackCountApiCallback = () => getFeedbackCountApi('', '', FeedbackStatusEnum.WAITING);
  const getTodayFeedbackCountApiCallback = () => getFeedbackCountApi(todayStart);

  const {
    data: totalFeedbackCountData,
    isSuccess: isGetTotalFeedbackCountSuccess,
  } = useQuery('get_feedback_waiting_count', getTotalFeedbackCountApiCallback);

  const {
    data: todayFeedbackCountData,
    isSuccess: isGetTodayFeedbackCountSuccess,
  } = useQuery('get_feedback_today_count', getTodayFeedbackCountApiCallback);

  const role = user.role as unknown as RoleEnum;
  const isUserAdmin = isAdmin(role);
  const isUserSupport = isUserAdmin || isSupport(role);
  const isMenuLoading = isUserSupport
    && !isGetTotalFeedbackCountSuccess
    && !isGetTodayFeedbackCountSuccess;
  const totalWaitingFeedbackCount = getFeedbackCount(totalFeedbackCountData).waiting;
  const todayFeedbackCount = getFeedbackCount(todayFeedbackCountData);

  return {
    isUserAdmin, isUserSupport, isMenuLoading, totalWaitingFeedbackCount, todayFeedbackCount,
  };
};

export { useSupportMenu };

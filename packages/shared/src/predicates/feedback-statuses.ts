import { FeedbackStatusEnum as FeedbackStatus } from '../enums';

const isFeedbackStatusWaiting = (status: FeedbackStatus) => status === FeedbackStatus.WAITING;
const isFeedbackStatusProcessing = (status: FeedbackStatus) => status === FeedbackStatus.PROCESSING;
const isFeedbackStatusDone = (status: FeedbackStatus) => status === FeedbackStatus.DONE;

export {
  isFeedbackStatusWaiting,
  isFeedbackStatusProcessing,
  isFeedbackStatusDone,
};

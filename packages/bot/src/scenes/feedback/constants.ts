import { MessageTypeEnum as MessageType, FeedbackStatusEnum as FeedbackStatus } from '@common_bot/shared';

const FEEDBACK_TYPE_ICONS = {
  [MessageType.TEXT]: '📝',
  [MessageType.FILE]: '💾',
  [MessageType.VOICE]: '🎙️',
  [MessageType.AUDIO]: '🎧',
  [MessageType.IMAGE]: '📸',
  [MessageType.VIDEO]: '📹',
  [MessageType.VIDEO_NOTE]: '📼',
  [MessageType.MEDIA_GROUP]: '🗄️',
  [MessageType.STICKER]: '',
};

const FEEDBACK_STATUS_ICONS = {
  [FeedbackStatus.WAITING]: '🟡',
  [FeedbackStatus.PROCESSING]: '🔵',
  [FeedbackStatus.DONE]: '🟢',
};

const DEFAULT_TEXT = '-------------------------';
const MAX_TEXT_SIZE = DEFAULT_TEXT.length - 6;

export {
  FEEDBACK_TYPE_ICONS, FEEDBACK_STATUS_ICONS, DEFAULT_TEXT, MAX_TEXT_SIZE,
};

import { FeedbackFilesTypeEnum, MessageTypeEnum } from '@common_bot/shared';
import type { FeedbackCreateDto, FeedbackFilesCreateDto } from '@common_bot/api';
import type { UrbanFileEvent } from '../types';

const getFileDataToPost = (
  event: UrbanFileEvent,
  messageT: MessageTypeEnum,
  fileT: FeedbackFilesTypeEnum,
) => {
  const fileType = fileT as unknown as FeedbackFilesCreateDto.type;
  const messageType = messageT as unknown as FeedbackCreateDto.type;

  const feedback_files = event.fileId ? [{
    id: event.fileId,
    type: fileType,
  }] : undefined;

  return {
    feedback_files,
    type: messageType,
  };
};

export { getFileDataToPost };

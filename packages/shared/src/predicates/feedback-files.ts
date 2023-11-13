import { FeedbackFilesTypeEnum as FeedbackFilesType } from '../enums';

const isImage = (type: FeedbackFilesType) => type === FeedbackFilesType.IMAGE;
const isVideo = (type: FeedbackFilesType) => type === FeedbackFilesType.VIDEO;
const isAudio = (type: FeedbackFilesType) => type === FeedbackFilesType.AUDIO;
const isFile = (type: FeedbackFilesType) => type === FeedbackFilesType.FILE;

export {
  isImage,
  isVideo,
  isAudio,
  isFile,
};

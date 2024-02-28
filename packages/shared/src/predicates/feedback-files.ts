import { FeedbackFilesTypeEnum as FeedbackFilesType } from '../enums';

const isFile = (type: FeedbackFilesType) => type === FeedbackFilesType.FILE;
const isAudio = (type: FeedbackFilesType) => type === FeedbackFilesType.AUDIO;
const isVoice = (type: FeedbackFilesType) => type === FeedbackFilesType.VOICE;
const isImage = (type: FeedbackFilesType) => type === FeedbackFilesType.IMAGE;
const isVideo = (type: FeedbackFilesType) => type === FeedbackFilesType.VIDEO;
const isVideoNote = (type: FeedbackFilesType) => type === FeedbackFilesType.VIDEO_NOTE;

export {
  isFile,
  isAudio,
  isVoice,
  isImage,
  isVideo,
  isVideoNote,
};

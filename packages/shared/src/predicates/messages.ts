import { MessageTypeEnum as MessageType } from '../enums';

const isTextMessage = (type: MessageType) => type === MessageType.TEXT;
const isStickerMessage = (type: MessageType) => type === MessageType.STICKER;
const isVoiceMessage = (type: MessageType) => type === MessageType.VOICE;
const isVideoNoteMessage = (type: MessageType) => type === MessageType.VIDEO_NOTE;
const isImageMessage = (type: MessageType) => type === MessageType.IMAGE;
const isVideoMessage = (type: MessageType) => type === MessageType.VIDEO;
const isAudioMessage = (type: MessageType) => type === MessageType.AUDIO;
const isFileMessage = (type: MessageType) => type === MessageType.FILE;

export {
  isTextMessage,
  isStickerMessage,
  isVoiceMessage,
  isVideoNoteMessage,
  isImageMessage,
  isVideoMessage,
  isAudioMessage,
  isFileMessage,
};

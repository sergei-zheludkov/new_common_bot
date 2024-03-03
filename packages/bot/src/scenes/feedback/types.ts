/* eslint-disable max-len */
import {
  UrbanSyntheticEventAudio,
  UrbanMessageMediaData,
  UrbanSyntheticEventFile,
  UrbanSyntheticEventImage,
  UrbanSyntheticEventText,
  UrbanSyntheticEventVideo,
  UrbanSyntheticEventVoice,
  UrbanSyntheticEventVideoNote,
  UrbanSyntheticEventMediaGroup, UrbanEventListener,
} from '@urban-bot/core';
import { UrbanBotTelegramType } from '@urban-bot/telegram';
import { MessageTypeEnum } from '@common_bot/shared';

export type AudioCallback = UrbanEventListener<UrbanBotTelegramType, MessageTypeEnum.AUDIO>;
export type FileCallback = UrbanEventListener<UrbanBotTelegramType, MessageTypeEnum.FILE>;
export type ImageCallback = UrbanEventListener<UrbanBotTelegramType, MessageTypeEnum.IMAGE>;
export type TextCallback = UrbanEventListener<UrbanBotTelegramType, MessageTypeEnum.TEXT>;
export type VideoCallback = UrbanEventListener<UrbanBotTelegramType, MessageTypeEnum.VIDEO>;
export type VoiceCallback = UrbanEventListener<UrbanBotTelegramType, MessageTypeEnum.VOICE>;
export type VideoNoteCallback = UrbanEventListener<UrbanBotTelegramType, MessageTypeEnum.VIDEO_NOTE>;
export type MediaGroupCallback = UrbanEventListener<UrbanBotTelegramType, MessageTypeEnum.MEDIA_GROUP>;

export type MediaFileType = UrbanMessageMediaData['files'][number]['type'];

export type UrbanFileEvent = Parameters<AudioCallback | FileCallback | ImageCallback | VideoCallback | VoiceCallback | VideoNoteCallback>[0];
export type UrbanMediaGroupEvent = Parameters<MediaGroupCallback>[0];

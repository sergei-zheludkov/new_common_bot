import React from 'react';
import {
  Text, File, Audio, Voice, Image, Video, VideoNote, Media,
} from '@urban-bot/core';
import { MessageTypeEnum } from '@common_bot/shared';
import type { FeedbackEntity } from '@common_bot/api';
import type { MediaFileType } from '../types';

type Props = {
  feedbackNote: FeedbackEntity;
};

const FeedbackRequestItem = ({ feedbackNote }: Props) => {
  const { text, feedback_files } = feedbackNote;

  switch (feedbackNote.type as unknown as MessageTypeEnum) {
    case MessageTypeEnum.TEXT:
      return <Text isNewMessageEveryRender={false}>{text}</Text>;

    case MessageTypeEnum.FILE:
      return (
        <File
          isNewMessageEveryRender={false}
          title={text}
          file={feedback_files[0].id}
        />
      );

    case MessageTypeEnum.VOICE:
      return (
        <Voice
          isNewMessageEveryRender={false}
          title={text}
          file={feedback_files[0].id}
        />
      );

    case MessageTypeEnum.AUDIO:
      return (
        <Audio
          isNewMessageEveryRender={false}
          title={text}
          file={feedback_files[0].id}
        />
      );

    case MessageTypeEnum.IMAGE:
      return (
        <Image
          isNewMessageEveryRender={false}
          title={text}
          file={feedback_files[0].id}
        />
      );

    case MessageTypeEnum.VIDEO:
      return (
        <Video
          isNewMessageEveryRender={false}
          title={text}
          file={feedback_files[0].id}
        />
      );

    case MessageTypeEnum.VIDEO_NOTE:
      return (
        <VideoNote
          isNewMessageEveryRender={false}
          title={text}
          file={feedback_files[0].id}
        />
      );

    case MessageTypeEnum.MEDIA_GROUP: {
      const files = feedback_files.map(({ id: file, type }) => ({
        file,
        type: type as MediaFileType,
      }));

      return (
        <Media
          isNewMessageEveryRender={false}
          title={text || undefined}
          files={files}
        />
      );
    }

    default:
      return null;
  }
};

export { FeedbackRequestItem };

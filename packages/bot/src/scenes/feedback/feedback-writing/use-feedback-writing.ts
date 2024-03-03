import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery, FeedbackCreateDto } from '@common_bot/api';
import { MessageTypeEnum, FeedbackFilesTypeEnum } from '@common_bot/shared';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useRouter } from '../../../contexts';
import { getFileDataToPost, getFilesDataToPost } from '../providers';
import type {
  AudioCallback,
  FileCallback,
  ImageCallback,
  TextCallback,
  VideoCallback,
  VideoNoteCallback,
  VoiceCallback,
  MediaGroupCallback,
} from '../types';

const useFeedbackWriting = () => {
  const { switchToMenuFeedback } = useRouter();
  const { bot, chat } = useBotContext<UrbanBotTelegram>();
  const { id: user_id } = chat;
  const {
    postFeedbackNote: postFeedbackNoteApi,
    getFeedbackDailyLimits: getFeedbackDailyLimitsApi,
  } = useApi().feedback;
  const {
    isCalled: isPostCalled,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: isPostError,
    statusCode: postStatusCode,
    fetch: postFeedbackNote,
  } = useQuery('post_feedback_note', postFeedbackNoteApi, { isLazy: true });
  const {
    // isCalled: isGetCalled,
    isLoading: isGetDailyLimitsLoading,
    isSuccess: isGetFeedbackDailyLimitsSuccess,
    // isError: isGetError,
    // statusCode: getStatusCode,
    data: limit = 0,
  } = useQuery('get_feedback_daily_limits', () => getFeedbackDailyLimitsApi(user_id));

  const sendFeedback = async (params: FeedbackCreateDto) => {
    await postFeedbackNote(params);

    switchToMenuFeedback();
  };

  const postTextFeedback: TextCallback = async (event) => {
    const messageType = MessageTypeEnum.TEXT as unknown as FeedbackCreateDto.type;

    const params = {
      id: event.messageId,
      text: event.text,
      type: messageType,
      user_id,
    };

    sendFeedback(params);
  };

  const postFileFeedback: FileCallback = async (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (event.nativeEvent.payload.media_group_id) {
      return;
    }

    const {
      feedback_files,
      type,
    } = getFileDataToPost(event, MessageTypeEnum.FILE, FeedbackFilesTypeEnum.FILE);

    const params = {
      id: event.messageId,
      text: event.text,
      type,
      user_id,
      feedback_files,
    };

    sendFeedback(params);
  };

  const postAudioFeedback: AudioCallback = async (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (event.nativeEvent.payload?.media_group_id) {
      return;
    }

    const {
      feedback_files,
      type,
    } = getFileDataToPost(event, MessageTypeEnum.AUDIO, FeedbackFilesTypeEnum.AUDIO);

    const params = {
      id: event.messageId,
      text: event.text,
      type,
      user_id,
      feedback_files,
    };

    sendFeedback(params);
  };

  const postVoiceFeedback: VoiceCallback = async (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (event.nativeEvent.payload.media_group_id) {
      return;
    }

    const {
      feedback_files,
      type,
    } = getFileDataToPost(event, MessageTypeEnum.VOICE, FeedbackFilesTypeEnum.VOICE);

    const params = {
      id: event.messageId,
      type,
      user_id,
      feedback_files,
    };

    sendFeedback(params);
  };

  const postImageFeedback: ImageCallback = async (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (event.nativeEvent.payload.media_group_id) {
      return;
    }

    const {
      feedback_files,
      type,
    } = getFileDataToPost(event, MessageTypeEnum.IMAGE, FeedbackFilesTypeEnum.IMAGE);

    const params = {
      id: event.messageId,
      text: event.text,
      type,
      user_id,
      feedback_files,
    };

    sendFeedback(params);
  };

  const postVideoFeedback: VideoCallback = async (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (event.nativeEvent?.payload?.media_group_id) {
      return;
    }

    const {
      feedback_files,
      type,
    } = getFileDataToPost(event, MessageTypeEnum.VIDEO, FeedbackFilesTypeEnum.VIDEO);

    const params = {
      id: event.messageId,
      text: event.text,
      type,
      user_id,
      feedback_files,
    };

    sendFeedback(params);
  };

  const postVideoNoteFeedback: VideoNoteCallback = async (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (event.nativeEvent.payload.media_group_id) {
      return;
    }

    const {
      feedback_files,
      type,
    } = getFileDataToPost(event, MessageTypeEnum.VIDEO_NOTE, FeedbackFilesTypeEnum.VIDEO_NOTE);

    const params = {
      id: event.messageId,
      type,
      user_id,
      feedback_files,
    };

    sendFeedback(params);
  };

  const postMediaGroupFeedback: MediaGroupCallback = async (event) => {
    const messageType = MessageTypeEnum.MEDIA_GROUP as unknown as FeedbackCreateDto.type;

    const params = {
      id: event.mediaGroupId,
      text: event.text,
      type: messageType,
      user_id,
      feedback_files: getFilesDataToPost(event),
    };

    sendFeedback(params);
  };

  return {
    postTextFeedback,
    postFileFeedback,
    postAudioFeedback,
    postVoiceFeedback,
    postImageFeedback,
    postVideoFeedback,
    postVideoNoteFeedback,
    postMediaGroupFeedback,
    // isError,
    // turnOnError,
    // turnOffError,
    limit,
    postFeedbackNote,
    isPostCalled,
    isPostLoading,
    isPostSuccess,
    isPostError,
    postStatusCode,
    isGetDailyLimitsLoading,
    isGetFeedbackDailyLimitsSuccess,
  };
};

export { useFeedbackWriting };

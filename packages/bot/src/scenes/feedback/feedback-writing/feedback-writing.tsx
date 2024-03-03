import React from 'react';
import {
  useText,
  useFile,
  useAudio,
  useVoice,
  useImage,
  useVideo,
  useVideoNote,
  useMediaGroup,
  ButtonGroup,
  Button, Text,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { Loading } from '../../../components';
import { useFeedbackWriting } from './use-feedback-writing';

export const FeedbackWriting = () => {
  const { switchToMenuFeedback } = useRouter();
  const { t } = useTranslation('feedback');
  const {
    limit,
    isGetDailyLimitsLoading,
    isPostSuccess,
    postTextFeedback,
    postAudioFeedback,
    postVoiceFeedback,
    postImageFeedback,
    postVideoFeedback,
    postVideoNoteFeedback,
    postFileFeedback,
    postMediaGroupFeedback,
  } = useFeedbackWriting();

  useText((event) => {
    if (event.text === t('buttons:back')) {
      switchToMenuFeedback();
      return;
    }

    postTextFeedback(event);
  });
  useMediaGroup(postMediaGroupFeedback);
  useFile(postFileFeedback);
  useAudio(postAudioFeedback);
  useVoice(postVoiceFeedback);
  useImage(postImageFeedback);
  useVideo(postVideoFeedback);
  useVideoNote(postVideoNoteFeedback);

  if (isGetDailyLimitsLoading) {
    return <Loading />;
  }

  if (isPostSuccess) {
    return (
      <Text>
        <>
          {t('sent_success')}
          <br />
          <br />
          {t('limit', { count: limit - 1 })}
        </>
      </Text>
    );
  }

  const title = (
    <>
      <b>{t('message')}</b>
      <br />
      {t('limit', { count: limit })}
      <br />
      <br />
      <i>{t('describe')}</i>
    </>
  );

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      isNewMessageEveryRender={false}
      title={title}
    >
      <Button>{t('buttons:back')}</Button>
    </ButtonGroup>
  );
};

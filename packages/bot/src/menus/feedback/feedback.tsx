import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { UTILITIES } from '@common_bot/shared';
import { useRouter } from '../../contexts';
import { Loading } from '../../components';
import { useFeedbackMenu } from './use-feedback-menu';

const { empty } = UTILITIES;

const Feedback = () => {
  const { t } = useTranslation('buttons');
  const { isAvailableToWriteFeedback, isGetSuccess } = useFeedbackMenu();
  const {
    switchToSceneFeedbackWriting,
    switchToSceneFeedbackRequests,
    switchToMenuMain,
  } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const write = t('write');
  const writeCallback = isAvailableToWriteFeedback ? switchToSceneFeedbackWriting : empty;
  useText(writeCallback, write);

  const requests = t('requests');
  useText(switchToSceneFeedbackRequests, requests);

  const back = t('back');
  useText(switchToMenuMain, back);
  /* --------------------------------- */

  // TODO Сообщение об ошибке с кнопкой выхода из сцены при isGetError
  if (!isGetSuccess) {
    return <Loading />;
  }

  const maxColumns = isAvailableToWriteFeedback ? 2 : 1;
  const writeButton = isAvailableToWriteFeedback ? <Button>{write}</Button> : null;
  const title = isAvailableToWriteFeedback ? t('common:feedback_menu') : t('feedback:error');

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={maxColumns}
      title={title}
    >
      {writeButton}
      <Button>{requests}</Button>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};

export { Feedback };

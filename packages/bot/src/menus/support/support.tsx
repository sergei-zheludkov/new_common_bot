import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
import { Loading } from '../../components';
import { useSupportMenu } from './use-support-menu';

const Support = () => {
  const { switchToSceneSupportRequests, switchToMenuMain } = useRouter();
  const { t } = useTranslation('buttons');
  const {
    isUserAdmin, isUserSupport, isMenuLoading, totalWaitingFeedbackCount, todayFeedbackCount,
  } = useSupportMenu();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('back');
  useText(switchToMenuMain, back);

  const requests = t('support_requests');
  useText(switchToSceneSupportRequests, requests);
  /* --------------------------------- */

  if (isMenuLoading) {
    return <Loading />;
  }

  const menuText = t('support:message');
  const errorText = t('support:error');
  const totalAwaitsCountText = t('feedback:total_in_waiting', { count: totalWaitingFeedbackCount });
  const todayAwaitsCountText = t('feedback:today_in_waiting', { count: todayFeedbackCount.waiting });
  const todayProcessingCountText = t('feedback:today_in_processing', { count: todayFeedbackCount.processing });
  const todayDoneCountText = t('feedback:today_in_done', { count: todayFeedbackCount.done });

  const title = isUserSupport
    ? (
      <>
        <b>{menuText}</b>
        <br />
        <br />
        <i>{totalAwaitsCountText}</i>
        {isUserAdmin && (
          <>
            <br />
            --------------------------------------------------
            <br />
            {'- '}
            <i>{todayAwaitsCountText}</i>
            <br />
            {'- '}
            <i>{todayProcessingCountText}</i>
            <br />
            {'- '}
            <i>{todayDoneCountText}</i>
          </>
        )}
      </>
    )
    : errorText;

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={1}
      title={title}
    >
      {isUserSupport && <Button>{requests}</Button>}
      <Button>{back}</Button>
    </ButtonGroup>
  );
};

export { Support };

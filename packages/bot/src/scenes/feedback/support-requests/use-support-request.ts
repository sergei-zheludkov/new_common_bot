import { useBotContext } from '@urban-bot/core';
import { FeedbackUpdateDto, useApi, useQuery } from '@common_bot/api';
import { FeedbackStatusEnum } from '@common_bot/shared';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useRouter } from '../../../contexts';

const useSupportRequest = () => {
  const { switchToMenuSupport } = useRouter();
  const { chat } = useBotContext<UrbanBotTelegram>();
  const {
    getOneFeedbackNote: getOneSupportNoteApi,
    patchFeedbackNote: patchFeedbackNoteApi,
  } = useApi().feedback;

  const { id: support_id } = chat;

  const {
    data: supportNote,
    // isCalled: isGetSupportNoteCalled,
    // isLoading: isGetSupportNoteLoading,
    isSuccess: isGetSupportNoteSuccess,
    // isError: isGetSupportNoteError,
    // statusCode: getSupportNoteStatusCode,
    fetch: getSupportNote,
  } = useQuery('get_support_note', getOneSupportNoteApi, { isLazy: true });

  const {
    // data: supportNote,
    // isCalled: isPatchSupportNoteCalled,
    // isLoading: isPatchSupportNoteLoading,
    isSuccess: isPatchSupportNoteSuccess,
    // isError: isPatchSupportNotesError,
    // statusCode: patchSupportNotesStatusCode,
    fetch: patchSupportNote,
  } = useQuery('patch_support_note', patchFeedbackNoteApi, { isLazy: true });

  const isSceneLoading = !isGetSupportNoteSuccess;
  const isStatusChanged = isPatchSupportNoteSuccess;
  const currentStatus = supportNote?.status as unknown as FeedbackStatusEnum;

  const handleRequestTakeIntoWork = async (id: string) => {
    const status = FeedbackStatusEnum.PROCESSING as unknown as FeedbackUpdateDto.status;

    await patchSupportNote({ id, status, support_id });

    switchToMenuSupport();
  };

  const handleRequestDone = async (id: string) => {
    const status = FeedbackStatusEnum.DONE as unknown as FeedbackUpdateDto.status;

    await patchSupportNote({ id, status, support_id });

    switchToMenuSupport();
  };

  return {
    supportNote,
    currentStatus,
    isSceneLoading,
    isStatusChanged,
    getSupportNote,
    handleRequestTakeIntoWork,
    handleRequestDone,
  };
};

export { useSupportRequest };

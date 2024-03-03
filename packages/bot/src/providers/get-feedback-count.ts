import type { FeedbackCountResponseDto } from '@common_bot/api/dist/generated';

const getFeedbackCount = (data?: FeedbackCountResponseDto) => ({
  waiting: data?.waiting ?? 0,
  processing: data?.processing ?? 0,
  done: data?.done ?? 0,
});

export { getFeedbackCount };

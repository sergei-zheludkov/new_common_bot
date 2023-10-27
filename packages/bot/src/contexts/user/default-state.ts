import { utilities } from '@common_bot/shared';
import type { UserEntity } from '@common_bot/api';
import type { ContextState } from './types';

const { empty } = utilities;

const defaultState: ContextState = {
  referralId: null,
  user: {} as UserEntity,

  fetch: empty,
  isCalled: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  // statusCode: NaN,
};

export { defaultState };

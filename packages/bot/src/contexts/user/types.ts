import type { ReactNode } from 'react';
import { UserEntity } from '@common_bot/api';

type ContextState = {
  referralId: string | null;
  user: UserEntity;

  fetch: () => void;
  isCalled: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  statusCode?: number;
}

type ProviderProps = {
  children: ReactNode;
};

export type { ContextState, ProviderProps };

import type { ReactNode } from 'react';
import { UserEntity } from '@common_bot/api';

type ContextState = {
  referralId: string | null;
  user: UserEntity;

  getUser: () => void;
  isGetCalled: boolean;
  isGetLoading: boolean;
  isGetSuccess: boolean;
  isGetError: boolean;
  getStatusCode?: number;
}

type ProviderProps = {
  children: ReactNode;
};

export type { ContextState, ProviderProps };

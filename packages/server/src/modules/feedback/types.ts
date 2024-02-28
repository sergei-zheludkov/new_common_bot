import { FeedbackStatusEnum } from '@common_bot/shared';
import type { Order } from '@common_bot/shared';

type GetQuery = {
  limit: number;
  offset: number;
  order?: Order;
  status?: FeedbackStatusEnum;
  user_id?: string;
  support_id?: string;
}

type Period = {
  start?: Date;
  end?: Date;
};

export type { GetQuery, Period };

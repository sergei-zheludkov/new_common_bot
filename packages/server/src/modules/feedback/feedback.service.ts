import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { InjectDataSource } from '@nestjs/typeorm';
import { DATE, FeedbackStatusEnum, PREDICATES } from '@common_bot/shared';
import {
  DataSource, MoreThan, Between, Repository,
} from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { FeedbackFilesEntity as FeedbackFiles } from '../feedback-files/feedback-files.entity';
import { FeedbackEntity as Feedback } from './feedback.entity';
import { FeedbackCreateDto, FeedbackUpdateDto, FeedbackCountResponseDto } from './dto';
import { getFeedbackNotesWhere } from './helpers';
import type { GetQuery, Period } from './types';

const { getTodayStart } = DATE;
const { isNaN } = PREDICATES;

const findOne = (feedback_repository: Repository<Feedback>, id: string) => feedback_repository
  .findOne({
    where: { id },
    relations: ['user', 'support', 'feedback_files'],
  });

@Injectable()
class FeedbackService {
  constructor(
    private readonly configService: ConfigService,
    // private readonly httpService: HttpService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  getOneFeedback(id: string) {
    return this.dataSource.transaction(async (manager) => {
      const feedback_repository = manager.getRepository(Feedback);

      return findOne(feedback_repository, id);
    });
  }

  getShortFeedbacks({
    order, limit, offset, status, user_id, support_id,
  }: GetQuery) {
    return this.dataSource.transaction(async (manager) => {
      const where = getFeedbackNotesWhere({ user_id, support_id, status });

      return manager.getRepository(Feedback)
        .createQueryBuilder('feedback')
        .leftJoinAndSelect('feedback.user', 'user')
        .leftJoinAndSelect('feedback.support', 'support')
        .select([
          'feedback.id',
          'feedback.type',
          'feedback.status',
          'feedback.text',
          'feedback.created',
        ])
        .where(where)
        .take(limit)
        .skip(offset)
        .orderBy('feedback.created', order)
        .getMany();
    });
  }

  getFullFeedbacks({
    order, limit, offset, status, user_id, support_id,
  }: GetQuery) {
    return this.dataSource.transaction(async (manager) => {
      const where = getFeedbackNotesWhere({ user_id, support_id, status });

      return manager.getRepository(Feedback)
        .createQueryBuilder('feedback')
        .leftJoinAndSelect('feedback.user', 'user')
        .leftJoinAndSelect('feedback.support', 'support')
        .where(where)
        .take(limit)
        .skip(offset)
        .orderBy('feedback.created', order)
        .getMany();
    });
  }

  getFeedbackCount(status: FeedbackStatusEnum | 'all', { start, end }: Period) {
    return this.dataSource.transaction(async (manager) => {
      const feedback_repository = manager.getRepository(Feedback);

      const result: FeedbackCountResponseDto = {};

      const getFindOperator = (s: Period['start'], e: Period['end']) => {
        if (!s && !e) {
          return undefined;
        }
        if (!e) {
          return MoreThan(s);
        }

        return Between(s, e);
      };

      const created = getFindOperator(start, end);

      switch (status) {
        case FeedbackStatusEnum.WAITING: {
          result.waiting = await feedback_repository.countBy({ status, created });

          break;
        }
        case FeedbackStatusEnum.PROCESSING: {
          result.processing = await feedback_repository.countBy({ status, created });

          break;
        }
        case FeedbackStatusEnum.DONE: {
          result.done = await feedback_repository.countBy({ status, created });

          break;
        }

        default: {
          result.waiting = await feedback_repository
            .countBy({ status: FeedbackStatusEnum.WAITING, created });
          result.processing = await feedback_repository
            .countBy({ status: FeedbackStatusEnum.PROCESSING, created });
          result.done = await feedback_repository
            .countBy({ status: FeedbackStatusEnum.DONE, created });
        }
      }

      return result;
    });
  }

  getDailyLimitByUser(id: string) {
    return this.dataSource.transaction(async (manager) => {
      const feedback_daily_limit = Number(this.configService.get('FEEDBACK_DAILY_LIMIT'));

      if (isNaN(feedback_daily_limit)) {
        // eslint-disable-next-line no-console
        console.log('You have to set up the "FEEDBACK_DAILY_LIMIT" property in .env');

        return 0;
      }

      const feedback_daily_count = await manager.getRepository(Feedback)
        .createQueryBuilder('feedback')
        .leftJoinAndSelect('feedback.user', 'user')
        .where({ user: { id }, created: MoreThan(getTodayStart()) })
        .getCount();

      return feedback_daily_limit - feedback_daily_count;
    });
  }

  async createFeedback(data: FeedbackCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const feedback_files_repository = manager.getRepository(FeedbackFiles);
        const feedback_repository = manager.getRepository(Feedback);

        // TODO Подумать над выбросом ошибки в случае если заявка создана
        const { id: feedback_id } = data;
        const feedback_in_db = await findOne(feedback_repository, feedback_id);

        if (feedback_in_db) {
          return feedback_in_db;
        }

        const {
          user_id: user,
          feedback_files = [],
          ...feedback_data
        } = data;

        const new_feedback = feedback_repository.create({ ...feedback_data, user });

        await feedback_repository.save(new_feedback);

        if (feedback_files.length) {
          const new_feedback_files = feedback_files.map(
            (file) => feedback_files_repository.create({ ...file, feedback_id }),
          );

          await feedback_files_repository.save(new_feedback_files);
        }

        return findOne(feedback_repository, feedback_id);
      });
    } catch (error) {
      logger.error('FeedbackService(createFeedback):', error);

      throw new Error();
    }
  }

  async updateFeedback(user_data: FeedbackUpdateDto) {
    const { id, ...data } = user_data;
    try {
      return await this.dataSource.transaction(async (manager) => {
        const feedback_repository = manager.getRepository(Feedback);
        const feedback_in_db = await findOne(feedback_repository, id);

        if (!feedback_in_db) {
          return feedback_in_db;
        }

        await feedback_repository.update({ id }, data);

        return findOne(feedback_repository, id);
      });
    } catch (e) {
      logger.error('FeedbackService(updateFeedback):', e);

      throw new Error();
    }
  }
}

export { FeedbackService };

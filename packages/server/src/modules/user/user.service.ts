import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { UserEntity as User } from './user.entity';
import { UserCreateDto, UserUpdateDto } from './dto';

@Injectable()
class UserService {
  constructor(
    private httpService: HttpService,
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  getOneUser(id: string) {
    return this.dataSource.transaction(async (manager) => {
      const users_repository = manager.getRepository(User);
      const user = await users_repository.findOneBy({ id });

      const who_invited = user?.who_invited;
      if (who_invited) {
        const referralUser = await users_repository.findOneBy({ id: who_invited });
        return { ...user, who_invited: referralUser };
      }

      return user;
    });
  }

  async createUser(data: UserCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        // TODO Подумать над выбросом ошибки в этом случае
        const { id } = data;
        const userInDB = await users_repository.findOneBy({ id });
        if (userInDB) {
          return userInDB;
        }

        const newUser = users_repository.create(data);
        return users_repository.save(newUser);
      });
    } catch (e) {
      logger.error('UserService.createUser():', e);
      throw new Error();
    }
  }

  async createUserWithReferral(data: UserCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        // TODO Подумать над выбросом ошибки в этом случае
        const { id } = data;
        const user_in_db = await users_repository.findOneBy({ id });
        if (user_in_db) {
          return user_in_db;
        }

        const new_user_data = users_repository.create(data);
        const user = await users_repository.save(new_user_data);

        const { who_invited } = data;
        if (!who_invited) {
          return user;
        }

        const referral_user = await users_repository.findOneBy({ id: who_invited });
        if (referral_user) {
          await users_repository.increment(
            { id: who_invited },
            'referral_counter',
            1,
          );

          // TODO обращение к API бота, для оповещения реферрала о новом подписчике
          // const { firstname, lastname } = user;
          // this.httpService.post();
          return { ...user, who_invited: referral_user };
        }

        await users_repository.update(
          { id: user.id },
          { who_invited: null },
        );

        // TODO обращение к API бота, для оповещения юзера что такого рефералла нет
        // const { firstname, lastname } = user;
        // this.httpService.post();
        return { ...user, who_invited: null };
      });
    } catch (e) {
      logger.error('UserService.createUserWithReferral():', e);
      throw new Error();
    }
  }

  async updateUser(user_data: UserUpdateDto) {
    const { id, ...data } = user_data;
    try {
      return await this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        const user_in_db = await users_repository.findOneBy({ id });
        if (!user_in_db) {
          return user_in_db;
        }

        await users_repository.update({ id }, data);
        const updated_user = await users_repository.findOneBy({ id });
        return updated_user;
      });
    } catch (e) {
      logger.error('UserService.updateUser():', e);
      throw new Error();
    }
  }
}

export { UserService };

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserEntity as User } from './user.entity';
import { UserCreateDto, UserUpdateDto } from './dto';

@Injectable()
class UserService {
  constructor(
    private httpService: HttpService,
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  async getOneUser(id: string) {
    return this.dataSource.transaction(async (manager) => {
      const usersRepository = manager.getRepository(User);
      const user = await usersRepository.findOneBy({ id });

      const who_invited = user?.who_invited;
      if (who_invited) {
        const referralUser = await usersRepository.findOneBy({ id: who_invited });
        return { ...user, who_invited: referralUser };
      }

      return user;
    });
  }

  createUser(data: UserCreateDto) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const usersRepository = manager.getRepository(User);

        // TODO Подумать над выбросом ошибки в этом случае
        const { id } = data;
        const userInDB = await usersRepository.findOneBy({ id });
        if (userInDB) {
          return userInDB;
        }

        const newUser = usersRepository.create(data);
        return usersRepository.save(newUser);
      });
    } catch (e) {
      //   TODO логирование и обработка ошибки
      console.log({ e });
      throw new Error();
    }
  }

  createUserWithReferral(data: UserCreateDto) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const usersRepository = manager.getRepository(User);

        // TODO Подумать над выбросом ошибки в этом случае
        const { id } = data;
        const userInDB = await usersRepository.findOneBy({ id });
        if (userInDB) {
          return userInDB;
        }

        const newUser = usersRepository.create(data);
        const user = await usersRepository.save(newUser);

        const { who_invited } = data;
        if (!who_invited) {
          return user;
        }

        const referralUser = await usersRepository.findOneBy({ id: who_invited });
        if (referralUser) {
          await usersRepository.increment(
            { id: who_invited },
            'referral_counter',
            1,
          );

          // TODO обращение к API бота, для оповещения реферрала о новом подписчике
          // const { firstname, lastname } = user;
          // this.httpService.post();
          return { ...user, who_invited: referralUser };
        }

        await usersRepository.update(
          { id: user.id },
          { who_invited: null },
        );

        // TODO обращение к API бота, для оповещения юзера что такого рефералла нет
        // const { firstname, lastname } = user;
        // this.httpService.post();
        return { ...user, who_invited: null };
      });
    } catch (e) {
      //   TODO логирование и обработка ошибки
      console.log({ e });
      throw new Error();
    }
  }

  // updateUser(id: string, data: UserUpdateDto) {
  //   return this.usersRepository.update({ id }, data);
  // }
}

export { UserService };

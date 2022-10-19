import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
// import { join } from 'path';
import { UserEntity } from '../user/user.entity';
import { WalletEntity } from '../wallet/wallet.entity';
import { PaymentEntity } from '../payment/payment.entity';
import { StatisticsEntity } from '../statistics/statistics.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('PG_DATABASE'),
        entities: [
          UserEntity,
          WalletEntity,
          PaymentEntity,
          StatisticsEntity,
        ],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
        // migrationsRun: true,
        // migrations: [join(__dirname, '../migration/**/*.ts')],
      }),
    }),
  ],
})

export class DatabaseModule {}

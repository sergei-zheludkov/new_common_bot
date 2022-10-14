import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from "../user/user.entity";
import { Wallet } from "../wallet/wallet.entity";
import { Payment } from "../payment/payment.entity";
import { Statistics } from "../statistics/statistics.entity";

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
          User,
          Wallet,
          Payment,
          Statistics,
        ],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
        migrationsRun: true,
        migrations: [__dirname + "../migration/**/*.ts"],
      }),
    })
  ],
})

export class DatabaseModule {}
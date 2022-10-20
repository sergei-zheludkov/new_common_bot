import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalHttpModule } from './libs/http/http.module';
import { DatabaseModule } from './libs/db/db.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GlobalHttpModule,
    DatabaseModule,
    UserModule,
  ],
})
export class AppModule {}

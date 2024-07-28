import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

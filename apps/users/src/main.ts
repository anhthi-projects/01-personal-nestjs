import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  const configService = app.get<ConfigService>(ConfigService);

  await app.listen(configService.get('USERS_PORT'));
}
bootstrap();

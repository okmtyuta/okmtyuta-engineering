import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import CONSTANTS from '@okmtyuta-engineering/library/lib/constants/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: CONSTANTS.URL.WEB,
      credentials: true,
    },
  });
  await app.listen(process.env.OKMTYUTA_ENGINEERING_API_PORT || 8000);
}
bootstrap();

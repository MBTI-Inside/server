import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { winstonLogger } from './util/logger';
import { AllExceptionFilter } from './filters/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger
  });
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true
  });

  app.useGlobalFilters(new AllExceptionFilter());

  await app.listen(process.env.PORT);
}

bootstrap();

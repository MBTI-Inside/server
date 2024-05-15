import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { winstonLogger } from './util/logger';
import { AllExceptionFilter } from './filters/exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger
  });
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('MBTI API')
    .setDescription('MBTI API')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  app.useGlobalFilters(new AllExceptionFilter());

  app.use(helmet());

  await app.listen(process.env.PORT);
}

bootstrap();

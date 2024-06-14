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

  const swaggerConfig = new DocumentBuilder()
    .setTitle('MBTI API')
    .setDescription(
      'MBTI API Host: https://hgurpwho0b.execute-api.ap-northeast-2.amazonaws.com/mbti-labmda-stage'
    )
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  app.useGlobalFilters(new AllExceptionFilter());

  app.use(helmet());

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: '*',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    optionsSuccessStatus: 200
  });

  await app.listen(process.env.PORT);
}

bootstrap();

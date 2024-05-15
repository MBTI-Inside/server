import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { winstonLogger } from './util/logger';
import { Callback, Context, Handler } from 'aws-lambda';
import serverlessExpress from '@codegenie/serverless-express';
import { AllExceptionFilter } from './filters/exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

let server: Handler;

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

  const swaggerConfig = new DocumentBuilder()
    .setTitle('MBTI API')
    .setDescription('MBTI API')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  app.use(helmet());

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};

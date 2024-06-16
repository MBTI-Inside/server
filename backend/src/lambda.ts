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
    origin: [process.env.CLIENT_HOST],
    credentials: true,
    // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD'],
    methods: '*',
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'X-HTTP-Method-Override',
      'X-Forwarded-Proto',
      'X-Forwarded-For',
      'X-Forwarded-Port'
    ],
    optionsSuccessStatus: 200
  });

  app.useGlobalFilters(new AllExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('MBTI API')
    .setDescription(`MBTI API Host: ${process.env.SERVER_HOST}}`)
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

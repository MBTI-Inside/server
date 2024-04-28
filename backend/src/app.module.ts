import { BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfig } from './config/mongoose.config';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { BoardModule } from './board/board.module';
import { LoggerModule } from './logger/logger.module';
import Joi from 'joi';
import { APP_PIPE } from '@nestjs/core';
import { SurveyModule } from './survey/survey.module';
import { ValidationError } from 'class-validator';

@Module({
  imports: [
    MongooseModule.forRootAsync(MongooseConfig),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      cache: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        MONGODB_DATABASE: Joi.string().required(),
        MONGODB_OPTIONS: Joi.string().required(),
        MONGODB_USERNAME: Joi.string().required(),
        MONGODB_PASSWORD: Joi.string().required()
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true
      }
    }),
    HealthModule,
    BoardModule,
    LoggerModule,
    SurveyModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        transformOptions: {
          enableImplicitConversion: true
        },
        exceptionFactory: (errors: ValidationError[]) => {
          const processed_errors = errors.map((error) => {
            if (error.constraints) {
              return Object.values(error.constraints);
            }
            return error;
          });
          throw new BadRequestException(JSON.stringify(processed_errors));
        }
      })
    }
  ]
})
export class AppModule {}

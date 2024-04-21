import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfig } from './config/mongoose.config';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { BoardModule } from './board/board.module';
import { LoggerModule } from './logger/logger.module';
import Joi from 'joi';

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
    LoggerModule
  ],
  controllers: []
})
export class AppModule {}

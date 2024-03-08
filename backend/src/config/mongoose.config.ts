import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  MongooseModuleAsyncOptions,
  MongooseModuleFactoryOptions
} from '@nestjs/mongoose';
import { Connection, MongooseError } from 'mongoose';
import { LoggerService } from 'src/logger/logger.service';

export const MongooseConfig: MongooseModuleAsyncOptions = {
  connectionName: 'are-you-t',
  imports: [ConfigModule],
  inject: [ConfigService, LoggerService],
  useFactory: (
    configService: ConfigService,
    logger: LoggerService
  ): MongooseModuleFactoryOptions => ({
    uri:
      configService.get('MONGODB_URI') + configService.get('MONGODB_OPTIONS'),
    user: configService.get('MONGODB_USERNAME'),
    pass: configService.get('MONGODB_PASSWORD'),
    dbName: configService.get('MONGODB_DATABASE'),
    minPoolSize: 4,
    maxPoolSize: 20,
    connectionFactory: (connection: Connection) => {
      connection.on('connecting', () => {
        logger.log('Mongoose가 MongoDB 서버에 연결중입니다!');
      });
      connection.on('connected', () => {
        logger.log('Mongoose가 MongoDB에 정상적으로 연결되었습니다.');
      });
      connection.on('disconnecting', () => {
        logger.log('Mongoose가 MongoDB와의 연결을 끊고 있습니다!');
      });
      connection.on('disconnected', () => {
        logger.log('Mongoose가 MongoDB와의 연결을 정상적으로 끊었습니다.');
      });

      return connection;
    },
    connectionErrorFactory: (error: MongooseError) => {
      logger.error(`Mongoose에서 에러가 발생하였습니다: ${error}`);
      return error;
    }
  })
};

export const MONGO_ARE_YOU_T_DATABASE = 'are-you-t';

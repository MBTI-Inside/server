import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfig } from './config/mongoose.config';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { BoardModule } from './board/board.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    MongooseModule.forRootAsync(MongooseConfig),
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    HealthModule,
    BoardModule,
    LoggerModule
  ],
  controllers: []
})
export class AppModule {}

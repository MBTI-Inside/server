import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true
  });

  setTimeout(() => {
    process.exit(0);
  }, 2000);

  await app.listen(process.env.PORT);
}
bootstrap();

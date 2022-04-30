/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe( //register validation pipe as global pipe
    { transform: true,   //enable auto type transform 
     whitelist: true }));  // deleting unnecessary object properties from DTOs
  app.enableCors();
  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  await app.listen(3000);
}
bootstrap();

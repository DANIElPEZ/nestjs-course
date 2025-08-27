import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // Import Validations
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());// set validation as global
  await app.listen(3000);
}
bootstrap();
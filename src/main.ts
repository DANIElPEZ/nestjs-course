import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'; // Import Validations
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, //use for nested classes "It's not real OOP: inheritance in DTOs only serves to reuse validations from the base class and add them to those of the subclass (and with ValidateNested Type,those of nested objects are also applied)"
    forbidNonWhitelisted: true, //throw error when non-whitelisted properties are present
    whitelist:true, //accept only properties that are defined in the DTO
    transformOptions:{
      enableImplicitConversion:true// convert default types from web to the types defined in dto's
    }
  }));// set regex validation as global
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));// apply rules for transform or exclude properties
  await app.listen(3000);
}
bootstrap();
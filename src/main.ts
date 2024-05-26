import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Valida que en la peticion lleguen ezactamaente los atributos definidos
      forbidNonWhitelisted: true, //Regresa error si vienen atributos extras
    })
  );

  await app.listen(3000);
}
main();

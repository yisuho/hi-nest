import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //DTO를 위해 파이프를 만들어 줄것이다.
  //유효성 검사를 해줄 파이프를 만들어 줄것이다. 일반적으로 파이프는 미들웨어 같은 거라고 생각할 수 있다.
  app.useGlobalPipes(
    //이안에 우리가 쓰고 싶은 파이프를 NestJS 어플리케이션에 넘겨줄것이다.
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();

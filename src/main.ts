import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders : "*",
    origin : "*"
  });
  await app.listen(process.env.PORT || 8080);
}
bootstrap();

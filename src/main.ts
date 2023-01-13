import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {origin : ["http://localhost:3000"],
  allowedHeaders : "*"}
  );
  await app.listen(process.env.PORT || 8080);
}
bootstrap();

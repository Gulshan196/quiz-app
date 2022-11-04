import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './roles.guard';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [AuthModule, UsersModule,MongooseModule.forRoot('mongodb+srv://gulshan:vK7VXZ9tt8wssJDL@cluster0.e338rv8.mongodb.net/quiz?retryWrites=true&w=majority'), QuestionsModule],
  controllers: [AppController],
  providers: [AppService
   ],
})
export class AppModule {}

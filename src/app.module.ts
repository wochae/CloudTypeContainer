import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { GameModule } from './game/game.module';
import { LoggerMiddleware } from './logger.middleware';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { InMemoryUsers } from './users/users.provider';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    TypeOrmModule.forRoot(typeORMConfig),
    ChatModule,
    UsersModule,
    GameModule,
    AuthModule,
    LoginModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService, InMemoryUsers],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('login'); // 맨 처음 들어가는
  }
}

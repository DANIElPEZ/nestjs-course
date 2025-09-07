import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get('host'),
          port: configService.get('port'),
          database: configService.get('db'),
          username: configService.get('db_user'),
          password: configService.get('db_password'),
          synchronize: false,
          autoLoadEntities: true
        }),
        inject:[ConfigService]
      }),
    UsersModule,
    PostsModule,
    AuthModule,
    AiModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
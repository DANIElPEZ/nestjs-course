import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          database: configService.get('db'),
          username: configService.get('db_user'),
          password: configService.get('db_password'),
          synchronize: false,
          autoLoadEntities: true
        }),
        inject:[ConfigService]
      }),
    UsersModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
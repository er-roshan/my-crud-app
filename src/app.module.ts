import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest-crud-app',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule { }

import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
@Module({
  controllers: [AppController],
  imports: [UserModule],

})
export class AppModule { }

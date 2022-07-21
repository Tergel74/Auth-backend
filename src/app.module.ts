import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/users.model'
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '13.215.139.119',
      port: 3306,
      username: 'rtd',
      password: 'Tiny722$',
      database: 'Tergel',
      models: [User],
    }),
    SequelizeModule.forFeature([User]),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

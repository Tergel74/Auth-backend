import { Module } from "@nestjs/common";
import { User } from "src/models/users.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

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
    ],
    providers: [UserService],
    controllers: [UserController]
})

export class UserModule {}
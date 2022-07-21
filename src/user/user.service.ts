import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { User } from 'src/models/users.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {};
  getUsers(): Promise<User[]> {
    return this.userModel.findAll()
  };

  createUser(data) {
    const newUser = new this.userModel({
      userId: data.userId,
      userName: data.userName,
      age: data.age,
      score: data.score,
      pass: data.pass
    })
    newUser.save()
    return newUser;
  }
}


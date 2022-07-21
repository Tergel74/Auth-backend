import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/users.model';

// generate random 4 digit number for the id
var val = Math.floor(1000 + Math.random() * 9000);

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {};
  getUsers(): Promise<User[]> {
    return this.userModel.findAll()
  };

  createUser(data) {
    const newUser = new this.userModel({
      userId: val,
      userName: data.userName,
      age: data.age,
      score: data.score,
      pass: data.pass
    })
    newUser.save()
    return newUser;
  }
}


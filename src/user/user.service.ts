import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/users.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {};

  getUsers(): Promise<User[]> {
    return this.userModel.findAll()
  };

  async createUser(data) {
    // generate random 4 digit number for the id
    let randomId = Math.floor(1000 + Math.random() * 9000);
    const isIdUnique = User.findOne({
      where: { userId: randomId },
    });

    while (await isIdUnique != null) {
      randomId = Math.floor(1000 + Math.random() * 9000);
      const isIdUnique = User.findOne({
        where: { userId: randomId },
      });
    }

    const newUser = new this.userModel({
      userId: randomId,
      userName: data.userName,
      age: data.age,
      score: data.score,
      pass: data.pass
    })
    newUser.save()
    return newUser;
  };

  async signIn(data) {
    const userMatch = User.findOne({ where: {userName: data.userName, pass: data.pass}});
    let matches = false;
    if (await userMatch != null) {
      matches = true;
      return userMatch
    } else {
      return matches
    }
  }
}


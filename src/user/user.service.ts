import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/users.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {};
  getUsers(): Promise<User[]> {
    return this.userModel.findAll()
  };
}


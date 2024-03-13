import { Injectable } from '@nestjs/common';
import { UserDb } from '../../models/user/user.db';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CreateUserRepository {
  constructor(@InjectModel(UserDb.name) private userModel: Model<UserDb>) {}

  async createUser(data: UserDb) {
    return this.userModel.create(data);
  }
}

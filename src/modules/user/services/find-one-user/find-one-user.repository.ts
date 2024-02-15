import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDb } from '../../models/user/user.db';
import { FilterQuery, Model, ProjectionType, QueryOptions } from 'mongoose';

@Injectable()
export class FindOneUserRepository {
  constructor(@InjectModel(UserDb.name) private userModel: Model<UserDb>) {}

  async findOneUser(
    filter: FilterQuery<UserDb>,
    projection?: ProjectionType<UserDb>,
    options?: QueryOptions,
  ) {
    const resp = await this.userModel.findOne(filter, projection, options);
    return resp.toObject();
  }
}

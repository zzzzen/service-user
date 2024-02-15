import { Injectable } from '@nestjs/common';
import { FindOneUserRepository } from './find-one-user.repository';
import { FilterQuery, ProjectionType, QueryOptions } from 'mongoose';
import { UserDb } from '../../models/user/user.db';

@Injectable()
export class FindOneUserService {
  constructor(private findOneUserRepository: FindOneUserRepository) {}

  async findOneUser(
    filter: FilterQuery<UserDb>,
    projection?: ProjectionType<UserDb>,
    options?: QueryOptions,
  ) {
    return this.findOneUserRepository.findOneUser(filter, projection, options);
  }
}

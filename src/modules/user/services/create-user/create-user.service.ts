import { Injectable } from '@nestjs/common';
import { CreateUserRepository } from './create-user.repository';
import { UserDb } from '../../models/user/user.db';

@Injectable()
export class CreateUserService {
  constructor(private createUserRepository: CreateUserRepository) {}

  async create(data: Omit<UserDb, '_id'>) {
    const res = await this.createUserRepository.createUser(data);
    return res.toObject();
  }
}

import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDb, UserDbSchema } from './models/user/user.db';
import { CreateUserService } from './services/create-user/create-user.service';
import { CreateUserRepository } from './services/create-user/create-user.repository';
import { UserResolver } from './user.resolver';
import { FindOneUserService } from './services/find-one-user/find-one-user.service';
import { FindOneUserRepository } from './services/find-one-user/find-one-user.repository';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserDb.name, schema: UserDbSchema }]),
  ],
  exports: [CreateUserService, FindOneUserService],
  providers: [
    UserResolver,
    CreateUserService,
    CreateUserRepository,
    FindOneUserService,
    FindOneUserRepository,
  ],
})
export class UserModule {}

import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserGql } from './models/user/user.gql';
import { FindOneUserService } from './services/find-one-user/find-one-user.service';
import { UserInput } from './dto/user.input';
import { AuthDecorator } from '../auth/auth.decorator';
import { UserDbDocument } from './models/user/user.db';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { AuthJwtGuard } from '../auth/auth-jwt.guard';

@Resolver(() => UserGql)
export class UserResolver {
  constructor(private findOneUserService: FindOneUserService) {}

  @UseGuards(AuthJwtGuard)
  @Query(() => UserGql)
  async user(@Args('data') data: UserInput) {
    return this.findOneUserService.findOneUser(data);
  }

  @UseGuards(AuthJwtGuard)
  @Query(() => UserGql)
  async self(@AuthDecorator() user: UserDbDocument) {
    const data = await this.findOneUserService.findOneUser({ _id: user._id });
    if (!data) throw new NotFoundException();
    return data;
  }
}

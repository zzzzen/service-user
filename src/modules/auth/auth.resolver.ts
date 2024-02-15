import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserGql } from '../user/models/user/user.gql';
import { SignUpInput } from './dto/sign-up.input';
import { SignInInput } from './dto/sign-in.input';
import { SignUpService } from './services/sign-up/sign-up.service';
import { SignUpOutput } from './dto/sign-up.output';
import { SignInOutput } from './dto/sign-in.output';
import { SignInService } from './services/sign-in/sign-in.service';

@Resolver(() => UserGql)
export class AuthResolver {
  constructor(
    private signUpService: SignUpService,
    private signInService: SignInService,
  ) {}

  @Mutation(() => SignUpOutput)
  async signUp(@Args('data') data: SignUpInput) {
    return this.signUpService.signUp(data);
  }

  @Mutation(() => SignInOutput)
  async signIn(@Args('data') data: SignInInput) {
    return this.signInService.signIn(data);
  }
}

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignInOutput {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}

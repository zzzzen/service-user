import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignUpOutput {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}

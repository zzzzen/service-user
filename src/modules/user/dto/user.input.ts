import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  _id: string;
}

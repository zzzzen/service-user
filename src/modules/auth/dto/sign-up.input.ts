import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignUpInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  company: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

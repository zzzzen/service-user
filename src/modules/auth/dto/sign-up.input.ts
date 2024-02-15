import { Field, InputType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

@InputType()
@Exclude()
export class SignUpInput {
  @Field()
  name: string;

  @Field()
  company: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

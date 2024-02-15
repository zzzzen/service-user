import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

@InputType()
@Exclude()
export class SignInInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

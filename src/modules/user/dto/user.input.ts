import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsMongoId, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

@InputType()
@Exclude()
export class UserInput {
  @Field()
  @IsMongoId()
  _id: string;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  email: string;
}

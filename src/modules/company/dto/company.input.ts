import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

@InputType()
@Exclude()
export class CompanyInput {
  @Field()
  @IsMongoId()
  _id: string;

  @Field()
  @IsString()
  name: string;
}

import { Field, InputType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
@Exclude()
export class OffersInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  skip?: number;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  limit?: number;
}

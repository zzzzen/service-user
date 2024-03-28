import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OffersInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  skip?: number;

  @Field({ nullable: true })
  limit?: number;
}

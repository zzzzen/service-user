import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompanyInput {
  @Field()
  _id: string;
}

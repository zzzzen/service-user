import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'CompanyGql ' })
export class CompanyGql {
  @Field(() => ID)
  _id: string;

  @Field({ nullable: false })
  name: string;
}

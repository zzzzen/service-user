import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CompanyGql } from '../../../company/models/company.gql';

@ObjectType({ description: 'UserGql ' })
export class UserGql {
  @Field(() => ID)
  _id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;

  @Field(() => CompanyGql)
  company: CompanyGql;
}

import { Args, Query, Resolver } from '@nestjs/graphql';
import { CompanyGql } from './models/company.gql';
import { FindOneCompanyService } from './services/find-one-company/find-one-company.service';
import { CompanyInput } from './dto/company.input';

@Resolver(() => CompanyGql)
export class CompanyResolver {
  constructor(private findOneCompanyService: FindOneCompanyService) {}

  @Query(() => CompanyGql)
  async company(@Args('data') data: CompanyInput) {
    return this.findOneCompanyService.findOneCompany(data);
  }
}

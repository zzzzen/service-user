import { Injectable } from '@nestjs/common';
import { FindOneCompanyRepository } from './find-one-company.repository';
import { FilterQuery, ProjectionType, QueryOptions } from 'mongoose';
import { CompanyDb } from '../../models/company.db';

@Injectable()
export class FindOneCompanyService {
  constructor(private repository: FindOneCompanyRepository) {}

  async findOneCompany(
    filter: FilterQuery<CompanyDb>,
    projection?: ProjectionType<CompanyDb>,
    options?: QueryOptions,
  ) {
    return this.repository.findOneCompany(filter, projection, options);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType, QueryOptions } from 'mongoose';
import { CompanyDb } from '../../models/company.db';

@Injectable()
export class FindOneCompanyRepository {
  constructor(
    @InjectModel(CompanyDb.name) private companyModel: Model<CompanyDb>,
  ) {}

  async findOneCompany(
    filter: FilterQuery<CompanyDb>,
    projection?: ProjectionType<CompanyDb>,
    options?: QueryOptions,
  ) {
    return this.companyModel.findOne(filter, projection, options);
  }
}

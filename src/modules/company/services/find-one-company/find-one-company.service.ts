import { Injectable } from '@nestjs/common';
import { FindOneCompanyRepository } from './find-one-company.repository';
import { IFindOneCompany } from './find-one-company.interface';

@Injectable()
export class FindOneCompanyService implements IFindOneCompany {
  constructor(private repository: FindOneCompanyRepository) {}

  async findOneCompany() {
    await this.repository.findOneCompany({});
  }
}

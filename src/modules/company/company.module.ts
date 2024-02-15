import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyDb, CompanyDbSchema } from './models/company.db';
import { CompanyResolver } from './company.resolver';
import { FindOneCompanyService } from './services/find-one-company/find-one-company.service';
import { FindOneCompanyRepository } from './services/find-one-company/find-one-company.repository';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CompanyDb.name, schema: CompanyDbSchema },
    ]),
  ],
  providers: [CompanyResolver, FindOneCompanyService, FindOneCompanyRepository],
  exports: [FindOneCompanyService],
})
export class CompanyModule {}

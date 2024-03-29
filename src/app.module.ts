import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CompanyModule } from './modules/company/company.module';
import { LoggerModule } from './modules/logger/logger.module';
import { MicroTransportModule } from './modules/micro-transport/micro-transport.module';
import { UtilsModule } from './modules/utils/utils.module';
import { OfferModule } from './modules/offer/offer.module';
import { ElasticSearchModule } from './modules/elastic-search/elastic-search.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    ScheduleModule.forRoot(),
    AuthModule,
    UserModule,
    CompanyModule,
    LoggerModule,
    MicroTransportModule,
    ElasticSearchModule,
    UtilsModule,
    OfferModule,
  ],
})
export class AppModule {}

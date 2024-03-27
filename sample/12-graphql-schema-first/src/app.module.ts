import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@fily-cloud/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}

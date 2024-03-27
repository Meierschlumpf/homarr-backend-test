import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@fily-cloud/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () => ({
        typePaths: [join(__dirname, '**', '*.graphql')],
      }),
    }),
  ],
})
export class AsyncApplicationModule {}

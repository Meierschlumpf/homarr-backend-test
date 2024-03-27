import { Injectable } from '@fily-cloud/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class ConfigService implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    return {
      typePaths: [join(__dirname, '**', '*.graphql')],
    };
  }
}

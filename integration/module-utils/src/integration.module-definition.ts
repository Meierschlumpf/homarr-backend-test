import { ConfigurableModuleBuilder } from '@fily-cloud/common';
import { IntegrationModuleOptions } from './interfaces/integration-module-options.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IntegrationModuleOptions>()
    .setClassMethodName('forRoot')
    .setFactoryMethodName('construct')
    .setExtras(
      {
        isGlobal: true,
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal,
      }),
    )
    .build();

import { Module } from '@fily-cloud/common';
import { APP_FILTER } from '@fily-cloud/core';
import { UnauthorizedFilter } from '../common/filters/unauthorized.filter';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';

@Module({
  providers: [
    RecipesResolver,
    RecipesService,
    DateScalar,
    {
      provide: APP_FILTER,
      useClass: UnauthorizedFilter,
    },
  ],
})
export class RecipesModule {}

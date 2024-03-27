import { SetMetadata } from '@fily-cloud/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

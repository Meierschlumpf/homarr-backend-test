import { CanActivate, ExecutionContext, Injectable } from '@fily-cloud/common';
import { Reflector } from '@fily-cloud/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () =>
      !!user.roles.find(role => !!roles.find(item => item === role));

    return user && user.roles && hasRole();
  }
}

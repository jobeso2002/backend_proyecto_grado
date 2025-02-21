import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { RoleType } from "../../common/enums/tiporole.enum";
import { ROLES_KEY } from "../decorators/roles.decorators";
import { Permison } from "../../common/enums/permiso.enum";
import { PERMISION_KEY } from "../decorators/permisos.decorators";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.getAllAndOverride<RoleType>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const requiredPermissions = this.reflector.getAllAndOverride<
      Permison[]
    >(PERMISION_KEY, [context.getHandler(), context.getClass()]);

    const { user } = context.switchToHttp().getRequest();
    console.log(user)
    // Validar rol si está definido
    if (requiredRole && user.role !== requiredRole && user.role != RoleType.ADMIN) {
     console.log(`El rol del usuario no coincide: ${user.role}`);
      return false;
    }

    // Validar permisos si están definidos
    if (requiredPermissions) {
      const userPermissions = user.permison || [];
      const hasAllPermissions = requiredPermissions.every((perm) =>
        userPermissions.includes(perm),
      );

      if (!hasAllPermissions) {
        console.log('Permisos insuficientes para acceder a este recurso');
        return false;
      }
    }

    return true; // Usuario autorizado si cumple con rol y permisos
  }
}
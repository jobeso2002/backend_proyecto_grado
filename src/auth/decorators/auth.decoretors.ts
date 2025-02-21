import { applyDecorators, UseGuards } from "@nestjs/common";
import { Permison } from "../../common/enums/permiso.enum";
import { RoleType } from "../../common/enums/tiporole.enum";
import { Roles } from "./roles.decorators";
import { Permision } from "./permisos.decorators";
import { AuthGuard } from "../guard/auth.guard";
import { RolesGuard } from "../guard/roles.guard";

export function Authen(role: RoleType, ...permision: Permison[]) {
    
    return applyDecorators(Roles(role), Permision(...permision), UseGuards(AuthGuard, RolesGuard))
}
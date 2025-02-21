import { SetMetadata } from "@nestjs/common";
import { RoleType } from "../../common/enums/tiporole.enum";
export const ROLES_KEY = 'role'

export const Roles = (roles: RoleType) => SetMetadata(ROLES_KEY, roles)
import { IsArray, IsOptional, IsString } from "class-validator";
import { RoleType } from "../../common/enums/tiporole.enum";


export class UpdateRoleDto {
    @IsOptional()
    @IsString()
    name: RoleType;
    
    @IsOptional()
    @IsArray()
    permisionId: number[];
}

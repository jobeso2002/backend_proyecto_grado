import { IsArray, IsEnum, IsNotEmpty } from "class-validator";
import { RoleType } from "../../common/enums/tiporole.enum";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN'})
    @IsEnum(RoleType, {message:"tipo de rol no encontrado"})
    name: RoleType;
    
    @ApiProperty({example: 1})
    @IsArray()
    @IsNotEmpty()
    permisionId: number[];
}

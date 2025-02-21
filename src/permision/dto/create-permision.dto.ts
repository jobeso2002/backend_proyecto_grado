import { IsEnum } from "class-validator";
import { Permison } from "../../common/enums/permiso.enum";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePermisionDto {
    @ApiProperty({example: 'WRITE'})
    @IsEnum(Permison, {message:"no permiso"})
    name: Permison;
}

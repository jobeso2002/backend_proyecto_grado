import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsInt, IsString, MinLength } from "class-validator";

export class CreateContactoDto {
    @ApiProperty({example: 'padre'})
    @IsString()
    @MinLength(1)
    parentesco: string;

    @ApiProperty({example: 'mz 33 casa 2'})
    @IsString()
    @MinLength(1)
    direccion_residencia: string;

    @ApiProperty({example: 'villa nueva'})
    @IsString()
    @MinLength(1)
    barrio: string;

    @ApiProperty({example: 1})
    @IsInt()
    deportistaId: number;
}

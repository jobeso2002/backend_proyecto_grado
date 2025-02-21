import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsInt, IsString, MinLength } from "class-validator";

export class CreateDirTecnicoDto {
    @ApiProperty({example: '2022-11-12'})
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_ingreso: Date;

    @ApiProperty({example: '2 años'})
    @IsString()
    @MinLength(1)
    experiencia: string;

    @ApiProperty({example: '5 años'})
    @IsString()
    @MinLength(1)
    licencia:string;

    @ApiProperty({example: 1})
    @IsInt()
    id_club: number;

    @ApiProperty({example: 1})
    @IsInt()
    id_persona: number;
}

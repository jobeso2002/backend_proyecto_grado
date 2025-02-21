import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsInt, IsString, MinLength } from "class-validator";

export class CreateEquipoDto {
    @ApiProperty({example: 'los ganadores'})
    @IsString()
    @MinLength(1)
    nombre_equipo: string;

    @ApiProperty({example: 'juvenil'})
    @IsString()
    @MinLength(1)
    categoria: string;

    @ApiProperty({example: 'activo'})
    @IsString()
    @MinLength(1)
    estado: string;

    @ApiProperty({example: '2023-2-1'})
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_creacion: Date;

    @ApiProperty({example: 1})
    @IsInt()
    id_club: number;

}

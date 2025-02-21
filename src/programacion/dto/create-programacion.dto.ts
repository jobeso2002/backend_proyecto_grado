import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsInt, IsString, MinLength } from "class-validator";

export class CreateProgramacionDto {
    @ApiProperty({example: '12'})
    @IsString()
    @MinLength(1)
    hora: string;

    @ApiProperty({example: '2023-22-1'})
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_inscripcion: Date;

    @ApiProperty({example: 'los agarrobillos'})
    @IsString()
    @MinLength(1)
    nombre_cancha: string;

    @ApiProperty({example: " 0 - 0"})
    @IsInt()
    marcador: string;

    @ApiProperty({example: 'activo'})
    @IsString()
    @MinLength(1)
    estado: string;

    @ApiProperty({example: 1})
    @IsInt()
    id_evento: number;

    @ApiProperty({example: 1})
    @IsInt()
    id_equipo_A: number;

    @ApiProperty({example: 2})
    @IsInt()
    id_equipo_B: number;

    @ApiProperty({example: 1})
    @IsInt()
    id_juez: number;

}

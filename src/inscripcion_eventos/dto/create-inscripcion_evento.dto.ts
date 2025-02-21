import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsInt, IsString, MinLength } from "class-validator";

export class CreateInscripcionEventoDto {
    @ApiProperty({example: '2023-22-1'})
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_inscripcion: Date;

    @ApiProperty({example: 'proceso'})
    @IsString()
    @MinLength(1)
    estado: string;

    @ApiProperty({example: 1})
    @IsInt()
    id_equipo: number;

    @ApiProperty({example: 1})
    @IsInt()
    id_deportista: number;
}

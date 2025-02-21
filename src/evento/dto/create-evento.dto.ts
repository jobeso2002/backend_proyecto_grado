import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsInt, IsString, MinLength } from "class-validator";

export class CreateEventoDto {
    @ApiProperty({example: 'partido amistoso'})
    @IsString()
    @MinLength(1)
    nombre_evento: string;

    @ApiProperty({example: '2023-21-1'})
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_evento: Date;

    @ApiProperty({example: '2'})
    @IsString()
    @MinLength(1)
    hora: string;

    @ApiProperty({example: 'garupal'})
    @IsString()
    @MinLength(1)
    lugar: string;

    @ApiProperty({example: 'juvenil'})
    @IsString()
    @MinLength(1)
    categoria: string;

    @ApiProperty({example: 'activo evento'})
    @IsString()
    @MinLength(1)
    estado: string;
    
    @ApiProperty({example: 1})
    @IsInt()
    cantidad_equipos: number;
}

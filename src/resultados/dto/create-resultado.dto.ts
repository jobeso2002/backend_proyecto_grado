import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsString, MinLength } from "class-validator";

export class CreateResultadoDto {
    @ApiProperty({example: '4 set'})
    @IsString()
    @MinLength(1)
    sets_jugados: string;

    @ApiProperty({example: 'jugando'})
    @IsString()
    @MinLength(1)
    estado: string;

    @ApiProperty({example: 1})
    @IsInt()
    id_programacion: number;

    @ApiProperty({example: 1})
    @IsInt()
    id_equipo_A: number;

    @ApiProperty({example: 2})
    @IsInt()
    id_equipo_B: number;
    
}

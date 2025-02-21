import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsInt, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateDeportistaDto {
    @ApiProperty({example: 'delantero-izquierdo'})
    @IsString()
    @MinLength(1)
    posicion: string;

    @ApiProperty({example: 'activo'})
    @IsString()
    @MinLength(1)
    estado: string;

    @ApiProperty({example: 5})
    @IsNumber()
    @IsPositive()
    numero_camisa: number;

    @ApiProperty({example: 1})
    @IsInt()
    id_club: number;

    @ApiProperty({example: 1})
    @IsInt()
    id_persona: number;

}

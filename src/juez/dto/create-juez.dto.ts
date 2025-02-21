import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsString, MinLength } from "class-validator";

export class CreateJuezDto {
    
    @ApiProperty({example: 'activo'})
    @IsString()
    @MinLength(1)
    estado: string;

    @ApiProperty({example: 'arbitro'})
    @IsString()
    @MinLength(1)
    especialidad: string;

    @ApiProperty({example: 1})
    @IsInt()
    id_evento: number;

    @ApiProperty({example: 1})
    @IsInt()
    id_persona: number;
}

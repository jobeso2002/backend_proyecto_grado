import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsInt, IsString, MinLength } from "class-validator";

export class CreateTransferenciaDto {
    @ApiProperty({example: '2023-2-1'})
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_solicitud: Date;

    @ApiProperty({example: 'en proceso'})
    @IsString()
    @MinLength(1)
    estado_transgerencia: string;

    @ApiProperty({example: '2023-2-2'})
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_aceptacion: Date;

    @ApiProperty({example: 'quiero estar en otro equipo'})
    @IsString()
    @MinLength(1)
    motivo_transferencia: string;

    @ApiProperty({example: 1})
    @IsInt()
    id_deportista: number;

    @ApiProperty({example: 1})
    @IsInt()
    id_club_origen: number;

    @ApiProperty({example: 2})
    @IsInt()
    id_club_destino: number;
}

import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsString, MinLength } from "class-validator";

export class CreateClubeDto {
    @ApiProperty({example: 'los llaneros'})
    @IsString()
    @MinLength(1)
    nombre_club: string;

    @ApiProperty({example: [1]})
    @IsArray()
    @IsInt({ each: true })
    id_dir_tecnico: number[];
}

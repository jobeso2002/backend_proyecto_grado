
import { IsDate, IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class UpdateDeportistaDto{
    @IsString()
    @MinLength(1)
    @IsOptional()
    posicion: string;
    @IsString()
    @MinLength(1)
    @IsOptional()
    estado: string;
    @IsNumber()
    @IsPositive()
    @IsOptional()
    numero_camisa: number;
}

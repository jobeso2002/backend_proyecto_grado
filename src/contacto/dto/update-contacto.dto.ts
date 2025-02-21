
import { IsDate, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateContactoDto{
    
    @IsString()
    @MinLength(1)
    @IsOptional()
    parentesco: string;
    @IsString()
    @MinLength(1)
    @IsOptional()
    direccion_residencia: string;
    @IsString()
    @MinLength(1)
    @IsOptional()
    barrio: string;
    
}

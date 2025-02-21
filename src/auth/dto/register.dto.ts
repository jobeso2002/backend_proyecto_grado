import { IsDate, IsEmail, IsIn, IsInt, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';
import {Transform} from 'class-transformer';

export class RegisterDto {
    @IsString()
    @MinLength(1)
    tipo_documento: string;
    @IsString()
    @MinLength(6)
    numero_documento: string;
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_exp_doc: Date;
    @IsString()
    @MinLength(1)
    lugar_exp_doc: string;
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_nacimiento: Date;
    @IsString()
    @MinLength(1)
    primer_nombre: string;
    @IsString()
    @MinLength(1)
    segundo_nombre: string;
    @IsString()
    @MinLength(1)
    primer_apellido: string;
    @IsString()
    @MinLength(1)
    segundo_apellido: string;
    @IsString()
    sexo: string;
    @IsString()
    tipo_sangre: string;
    @IsNumber()
    @IsPositive()
    edad: number;
    
    @IsString()
    nacionalidad: string;
    @IsString()
    @MinLength(1)
    telefono: string;
    @IsEmail({}, { message: 'Correo inválido' })
    email: string;
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    password: string;
    @IsInt()
    @IsPositive()
    id_rol: number;
}

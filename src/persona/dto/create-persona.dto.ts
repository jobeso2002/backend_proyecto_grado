import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePersonaDto {
    @ApiProperty({example: 'cedula'})
    @IsString()
    @MinLength(1)
    tipo_documento: string;
    @ApiProperty({example: '101232412'})
    @IsString()
    @MinLength(6)
    numero_documento: string;
    @ApiProperty({example: '1995-05-20'})
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_exp_doc: Date;
    @ApiProperty({example: 'valledupar'})
    @IsString()
    @MinLength(1)
    lugar_exp_doc: string;
    @ApiProperty({example: '1985-01-22'})
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_nacimiento: Date;
    @ApiProperty({example: 'pepe'})
    @IsString()
    @MinLength(1)
    primer_nombre: string;
    @ApiProperty({example: 'antonio'})
    @IsString()
    @MinLength(1)
    segundo_nombre: string;
    @ApiProperty({example: 'redondo'})
    @IsString()
    @MinLength(1)
    primer_apellido: string;
    @ApiProperty({example: 'vilches'})
    @IsString()
    @MinLength(1)
    segundo_apellido: string;
    @ApiProperty({example: 'masculino'})
    @IsString()
    sexo: string;
    @ApiProperty({example: 'o+'})
    @IsString()
    tipo_sangre: string;
    @ApiProperty({example: 14})
    @IsNumber()
    @IsPositive()
    edad: number;
    
    @ApiProperty({example: 'colombia'})
    @IsString()
    nacionalidad: string;
    @ApiProperty({example: '3008489113'})
    @IsString()
    @MinLength(1)
    telefono: string;
    @ApiProperty({example: 'pepe@example.com'})
    @IsEmail({}, { message: 'Correo inválido' })
    email: string;
    @ApiProperty({example: '1234567'})
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    password: string;
    @ApiProperty({example: 1})
    @IsInt()
    @IsPositive()
    id_rol: number;
}

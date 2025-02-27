import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateClubeDto {
  @IsOptional()
  @IsString()
  nombre_club?: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  id_dir_tecnico: number[];
}

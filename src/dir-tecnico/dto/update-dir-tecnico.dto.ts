import { PartialType } from '@nestjs/mapped-types';
import { CreateDirTecnicoDto } from './create-dir-tecnico.dto';

export class UpdateDirTecnicoDto extends PartialType(CreateDirTecnicoDto) {}

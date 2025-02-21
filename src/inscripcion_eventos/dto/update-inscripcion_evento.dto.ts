import { PartialType } from '@nestjs/mapped-types';
import { CreateInscripcionEventoDto } from './create-inscripcion_evento.dto';

export class UpdateInscripcionEventoDto extends PartialType(CreateInscripcionEventoDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateJuezDto } from './create-juez.dto';

export class UpdateJuezDto extends PartialType(CreateJuezDto) {}

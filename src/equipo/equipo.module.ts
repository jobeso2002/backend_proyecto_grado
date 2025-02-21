import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipo } from './entities/equipo.entity';
import { ClubesModule } from '../clubes/clubes.module';
import { InscripcionEvento } from '../inscripcion_eventos/entities/inscripcion_evento.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Equipo]), ClubesModule, InscripcionEvento],
  controllers: [EquipoController],
  providers: [EquipoService],
  exports:[TypeOrmModule.forFeature([Equipo])]
})
export class EquipoModule {}

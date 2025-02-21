import { Module } from '@nestjs/common';
import { InscripcionEventosService } from './inscripcion_eventos.service';
import { InscripcionEventosController } from './inscripcion_eventos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InscripcionEvento } from './entities/inscripcion_evento.entity';
import { DeportistaModule } from '../deportista/deportista.module';
import { EquipoModule } from '../equipo/equipo.module';


@Module({
  imports:[TypeOrmModule.forFeature([InscripcionEvento]), DeportistaModule, EquipoModule],
  controllers: [InscripcionEventosController],
  providers: [InscripcionEventosService],
  exports:[TypeOrmModule.forFeature([InscripcionEvento])]
})
export class InscripcionEventosModule {}

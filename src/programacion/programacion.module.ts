import { Module } from '@nestjs/common';
import { ProgramacionService } from './programacion.service';
import { ProgramacionController } from './programacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programacion } from './entities/programacion.entity';
import { EquipoModule } from '../equipo/equipo.module';
import { EventoModule } from '../evento/evento.module';
import { JuezModule } from '../juez/juez.module';

@Module({
  imports:[TypeOrmModule.forFeature([Programacion]), EquipoModule, EventoModule, JuezModule],
  controllers: [ProgramacionController],
  providers: [ProgramacionService],
  exports:[TypeOrmModule.forFeature([Programacion])]
})
export class ProgramacionModule {}

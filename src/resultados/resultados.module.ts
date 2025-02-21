import { Module } from '@nestjs/common';
import { ResultadosService } from './resultados.service';
import { ResultadosController } from './resultados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultado } from './entities/resultado.entity';
import { EquipoModule } from '../equipo/equipo.module';
import { ProgramacionModule } from '../programacion/programacion.module';

@Module({
  imports:[TypeOrmModule.forFeature([Resultado]), EquipoModule, ProgramacionModule],
  controllers: [ResultadosController],
  providers: [ResultadosService],
  exports:[ResultadosService]
})
export class ResultadosModule {}

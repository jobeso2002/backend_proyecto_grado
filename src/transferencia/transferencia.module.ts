import { Module } from '@nestjs/common';
import { TransferenciaService } from './transferencia.service';
import { TransferenciaController } from './transferencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transferencia } from './entities/transferencia.entity';
import { DeportistaModule } from '../deportista/deportista.module';
import { ClubesModule } from '../clubes/clubes.module';

@Module({
  imports:[TypeOrmModule.forFeature([Transferencia]), DeportistaModule, ClubesModule ],
  controllers: [TransferenciaController],
  providers: [TransferenciaService],
  exports:[TransferenciaService]
})
export class TransferenciaModule {}

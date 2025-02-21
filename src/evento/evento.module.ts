import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Evento])],
  controllers: [EventoController],
  providers: [EventoService],
  exports:[TypeOrmModule.forFeature([Evento])]
})
export class EventoModule {}

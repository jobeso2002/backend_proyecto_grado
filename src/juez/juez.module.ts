import { forwardRef, Module } from '@nestjs/common';
import { JuezService } from './juez.service';
import { JuezController } from './juez.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Juez } from './entities/juez.entity';
import { EventoModule } from '../evento/evento.module';
import { PersonaModule } from '../persona/persona.module';

@Module({
  imports:[TypeOrmModule.forFeature([Juez]), EventoModule, PersonaModule],
  controllers: [JuezController],
  providers: [JuezService],
  exports:[TypeOrmModule.forFeature([Juez])]
})
export class JuezModule {}

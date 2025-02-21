import { forwardRef, Module } from '@nestjs/common';
import { DeportistaService } from './deportista.service';
import { DeportistaController } from './deportista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deportista } from './entities/deportista.entity';
import { AuthModule } from '../auth/auth.module';
import { RolesModule } from '../roles/roles.module';
import { ClubesModule } from '../clubes/clubes.module';
import { InscripcionEvento } from '../inscripcion_eventos/entities/inscripcion_evento.entity';
import { PersonaModule } from '../persona/persona.module';

@Module({
  imports:[TypeOrmModule.forFeature([Deportista]), forwardRef(()=> AuthModule), RolesModule, ClubesModule, InscripcionEvento, PersonaModule],
  controllers: [DeportistaController],
  providers: [DeportistaService],
  exports: [TypeOrmModule.forFeature([Deportista])]
})
export class DeportistaModule {}

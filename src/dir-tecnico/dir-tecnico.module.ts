import { forwardRef, Module } from '@nestjs/common';
import { DirTecnicoService } from './dir-tecnico.service';
import { DirTecnicoController } from './dir-tecnico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirTecnico } from './entities/dir-tecnico.entity';
import { ClubesModule } from '../clubes/clubes.module';
import { PersonaModule } from '../persona/persona.module';

@Module({
  imports:[TypeOrmModule.forFeature([DirTecnico]), forwardRef(() => ClubesModule), forwardRef(() => PersonaModule)],
  controllers: [DirTecnicoController],
  providers: [DirTecnicoService],
  exports:[TypeOrmModule.forFeature([DirTecnico])]
})
export class DirTecnicoModule {}

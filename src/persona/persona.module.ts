import { forwardRef, Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { AuthModule } from '../auth/auth.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports:[TypeOrmModule.forFeature([Persona]), forwardRef(()=> AuthModule), RolesModule, ],
  controllers: [PersonaController],
  providers: [PersonaService],
  exports:[TypeOrmModule.forFeature([Persona]), PersonaService]
})
export class PersonaModule {}

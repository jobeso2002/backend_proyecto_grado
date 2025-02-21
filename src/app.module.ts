import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { PermisionModule } from './permision/permision.module';
import { AuthModule } from './auth/auth.module';
import { ContactoModule } from './contacto/contacto.module';
import { DeportistaModule } from './deportista/deportista.module';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubesModule } from './clubes/clubes.module';
import { DirTecnicoModule } from './dir-tecnico/dir-tecnico.module';
import { EquipoModule } from './equipo/equipo.module';
import { EventoModule } from './evento/evento.module';
import { JuezModule } from './juez/juez.module';
import { ProgramacionModule } from './programacion/programacion.module';
import { ResultadosModule } from './resultados/resultados.module';
import { InscripcionEventosModule } from './inscripcion_eventos/inscripcion_eventos.module';
import { TransferenciaModule } from './transferencia/transferencia.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    RolesModule, 
    PermisionModule, 
    AuthModule, 
    ContactoModule, 
    DeportistaModule, 
    ClubesModule, DirTecnicoModule, EquipoModule, EventoModule, JuezModule, ProgramacionModule, ResultadosModule, InscripcionEventosModule, TransferenciaModule, PersonaModule
  ]
  
})
export class AppModule {}

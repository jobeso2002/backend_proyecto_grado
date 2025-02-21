import { forwardRef, Module } from '@nestjs/common';
import { ClubesService } from './clubes.service';
import { ClubesController } from './clubes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clube } from './entities/clube.entity';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';
import { DirTecnicoModule } from '../dir-tecnico/dir-tecnico.module';

@Module({
  imports:[TypeOrmModule.forFeature([Clube]), forwardRef(()=> AuthModule), RolesModule, forwardRef(() => DirTecnicoModule)],
  controllers: [ClubesController],
  providers: [ClubesService],
  exports:[TypeOrmModule.forFeature([Clube])]
})
export class ClubesModule {}

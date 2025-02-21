import { Module } from '@nestjs/common';
import { PermisionService } from './permision.service';
import { PermisionController } from './permision.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permision } from './entities/permision.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Permision])],
  controllers: [PermisionController],
  providers: [PermisionService],
  exports: [PermisionService]
})
export class PermisionModule {}

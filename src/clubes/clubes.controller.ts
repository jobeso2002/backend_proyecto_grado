import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClubesService } from './clubes.service';
import { CreateClubeDto } from './dto/create-clube.dto';
import { UpdateClubeDto } from './dto/update-clube.dto';
import { Authen } from '../auth/decorators/auth.decoretors';
import { RoleType } from '../common/enums/tiporole.enum';
import { Permison } from '../common/enums/permiso.enum';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('clubes')
export class ClubesController {
  constructor(private readonly clubesService: ClubesService) {}

  @ApiBearerAuth('mi secreto')
  @Authen(RoleType.ADMIN, Permison.WRITE)
  @Post()
  create(@Body() createClubeDto: CreateClubeDto) {
    return this.clubesService.create(createClubeDto);
  }

  @Get()
  findAll() {
    return this.clubesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clubesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateClubeDto: UpdateClubeDto) {
    return this.clubesService.update(id, updateClubeDto);
  }


  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clubesService.remove(id);
  }
}

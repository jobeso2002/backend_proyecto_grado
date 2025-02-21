import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DirTecnicoService } from './dir-tecnico.service';
import { CreateDirTecnicoDto } from './dto/create-dir-tecnico.dto';
import { UpdateDirTecnicoDto } from './dto/update-dir-tecnico.dto';

@Controller('dir-tecnico')
export class DirTecnicoController {
  constructor(private readonly dirTecnicoService: DirTecnicoService) {}

  @Post()
  create(@Body() createDirTecnicoDto: CreateDirTecnicoDto) {
    return this.dirTecnicoService.create(createDirTecnicoDto);
  }

  @Get()
  findAll() {
    return this.dirTecnicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.dirTecnicoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDirTecnicoDto: UpdateDirTecnicoDto) {
    return this.dirTecnicoService.update(+id, updateDirTecnicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dirTecnicoService.remove(+id);
  }
}

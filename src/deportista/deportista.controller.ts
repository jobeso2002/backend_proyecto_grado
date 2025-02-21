import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeportistaService } from './deportista.service';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { RoleType } from '../common/enums/tiporole.enum';
import { Authen } from '../auth/decorators/auth.decoretors';
import { Permison } from '../common/enums/permiso.enum';

@Controller('deportista')
export class DeportistaController {
  constructor(private readonly deportistaService: DeportistaService) {}

  
  @Post()
  create(@Body() createDeportistaDto: CreateDeportistaDto) {
    return this.deportistaService.create(createDeportistaDto);
  }

  @Get()
  findAll() {
    return this.deportistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.deportistaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDeportistaDto: UpdateDeportistaDto) {
    return this.deportistaService.update(id, updateDeportistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.deportistaService.remove(id);
  }
}

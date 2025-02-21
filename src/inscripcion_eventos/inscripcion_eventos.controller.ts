import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InscripcionEventosService } from './inscripcion_eventos.service';
import { CreateInscripcionEventoDto } from './dto/create-inscripcion_evento.dto';
import { UpdateInscripcionEventoDto } from './dto/update-inscripcion_evento.dto';

@Controller('inscripcion-eventos')
export class InscripcionEventosController {
  constructor(private readonly inscripcionEventosService: InscripcionEventosService) {}

  @Post()
  create(@Body() createInscripcionEventoDto: CreateInscripcionEventoDto) {
    return this.inscripcionEventosService.create(createInscripcionEventoDto);
  }

  @Get()
  findAll() {
    return this.inscripcionEventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inscripcionEventosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInscripcionEventoDto: UpdateInscripcionEventoDto) {
    return this.inscripcionEventosService.update(+id, updateInscripcionEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inscripcionEventosService.remove(+id);
  }
}

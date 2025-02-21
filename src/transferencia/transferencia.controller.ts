import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransferenciaService } from './transferencia.service';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
import { UpdateTransferenciaDto } from './dto/update-transferencia.dto';

@Controller('transferencia')
export class TransferenciaController {
  constructor(private readonly transferenciaService: TransferenciaService) {}

  @Post()
  create(@Body() createTransferenciaDto: CreateTransferenciaDto) {
    return this.transferenciaService.create(createTransferenciaDto);
  }

  @Get()
  findAll() {
    return this.transferenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransferenciaDto: UpdateTransferenciaDto) {
    return this.transferenciaService.update(+id, updateTransferenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferenciaService.remove(+id);
  }
}

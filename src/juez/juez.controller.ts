import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JuezService } from './juez.service';
import { CreateJuezDto } from './dto/create-juez.dto';
import { UpdateJuezDto } from './dto/update-juez.dto';

@Controller('juez')
export class JuezController {
  constructor(private readonly juezService: JuezService) {}

  @Post()
  create(@Body() createJuezDto: CreateJuezDto) {
    return this.juezService.create(createJuezDto);
  }

  @Get()
  findAll() {
    return this.juezService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.juezService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJuezDto: UpdateJuezDto) {
    return this.juezService.update(+id, updateJuezDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juezService.remove(+id);
  }
}

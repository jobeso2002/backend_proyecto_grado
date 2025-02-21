import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Authen } from '../auth/decorators/auth.decoretors';
import { RoleType } from '../common/enums/tiporole.enum';
import { Permison } from '../common/enums/permiso.enum';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @ApiBearerAuth('mi secreto')
  @Authen(RoleType.ADMIN, Permison.WRITE)
  @Post()
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personaService.create(createPersonaDto);
  }


  @Get()
  findAll() {
    return this.personaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(+id, updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(+id);
  }
}

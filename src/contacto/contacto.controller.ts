import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { Authen } from '../auth/decorators/auth.decoretors';
import { RoleType } from '../common/enums/tiporole.enum';

@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  
  @Post()
  create(@Body() createContactoDto: CreateContactoDto) {
    return this.contactoService.create(createContactoDto);
  }

  @Get()
  findAll() {
    return this.contactoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contactoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateContactoDto: UpdateContactoDto) {
    return this.contactoService.update(id, updateContactoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contactoService.remove(id);
  }
}

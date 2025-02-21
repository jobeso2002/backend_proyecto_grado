import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contacto } from './entities/contacto.entity';
import { Repository } from 'typeorm';
import { Deportista } from '../deportista/entities/deportista.entity';

@Injectable()
export class ContactoService {
  constructor(
    @InjectRepository(Contacto)
    private readonly contactoRepository: Repository<Contacto>,
    @InjectRepository(Deportista)
    private readonly deportistaRepository: Repository<Deportista>
  ){}

  async create(createContactoDto: CreateContactoDto) {
      // Buscar el deportista por su ID
      const deportista = await this.deportistaRepository.findOneBy({
        id: createContactoDto.deportistaId
      });

      if(!deportista){
        throw new NotFoundException(`deportista con el ID ${createContactoDto.deportistaId} no encontrado`)
      }
      // Crear el contacto y asignarle el deportista
      const contacto = this.contactoRepository.create({
        ...createContactoDto,
        deportista
      });

    return  this.contactoRepository.save(contacto);
  }

  async findAll() {
    return  this.contactoRepository.find({relations: ['deportista'] });
  }

  async findOne(id: number) {
    return this.contactoRepository.findOne({ 
      where: {id},
      relations: ['deportista']
     });
  }

  update(id: number, updateContactoDto: UpdateContactoDto) {
    return `This action updates a #${id} contacto`;
  }

  remove(id: number) {
    return `This action removes a #${id} contacto`;
  }
}

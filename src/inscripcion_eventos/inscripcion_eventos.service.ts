import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInscripcionEventoDto } from './dto/create-inscripcion_evento.dto';
import { UpdateInscripcionEventoDto } from './dto/update-inscripcion_evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InscripcionEvento } from './entities/inscripcion_evento.entity';
import { Repository } from 'typeorm';
import { Deportista } from '../deportista/entities/deportista.entity';
import { Equipo } from '../equipo/entities/equipo.entity';

@Injectable()
export class InscripcionEventosService {
  constructor(
    @InjectRepository(InscripcionEvento)
    private readonly inscripcionRepository: Repository<InscripcionEvento>,
    @InjectRepository(Deportista)
    private readonly deportistaRepository: Repository<Deportista>,
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>
  ){}
  
  async create(createInscripcionEventoDto: CreateInscripcionEventoDto) {
    const  deportista = await this.deportistaRepository.findOneBy({
      id:createInscripcionEventoDto.id_deportista
    })

    const equipo = await this.equipoRepository.findOneBy({
      id:createInscripcionEventoDto.id_equipo
    })

    if(!deportista){
      throw new NotFoundException(`evento con el ID ${createInscripcionEventoDto.id_deportista} no se encontro`)
    }

    if(!equipo){
      throw new NotFoundException(`evento con el ID ${createInscripcionEventoDto.id_equipo} no se encontro`)
    }

    const inscripcion_evento = this.inscripcionRepository.create({
      ...createInscripcionEventoDto,
      deportista,
      equipo
    })

    return this.inscripcionRepository.save(inscripcion_evento);
  }

  async findAll() {
    return this.inscripcionRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} inscripcionEvento`;
  }

  update(id: number, updateInscripcionEventoDto: UpdateInscripcionEventoDto) {
    return `This action updates a #${id} inscripcionEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} inscripcionEvento`;
  }
}

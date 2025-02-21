import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramacionDto } from './dto/create-programacion.dto';
import { UpdateProgramacionDto } from './dto/update-programacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Programacion } from './entities/programacion.entity';
import { Repository } from 'typeorm';
import { Equipo } from '../equipo/entities/equipo.entity';
import { Evento } from '../evento/entities/evento.entity';
import { Juez } from '../juez/entities/juez.entity';

@Injectable()
export class ProgramacionService {
  constructor(
    @InjectRepository(Programacion)
    private readonly programacionRepository: Repository<Programacion>,
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
    @InjectRepository(Juez)
    private readonly juezRepository: Repository<Juez>,
    
  ){}

  async create(createProgramacionDto: CreateProgramacionDto) {
    const equipoA = await this.equipoRepository.findOneBy({
      id: createProgramacionDto.id_equipo_A
    });

    const equipoB = await this.equipoRepository.findOneBy({
      id: createProgramacionDto.id_equipo_B
    });

    if (!equipoA) {
      throw new NotFoundException(`El equipo A con el ID ${createProgramacionDto.id_equipo_A} no se encontró`);
    }

    if (!equipoB) {
      throw new NotFoundException(`El equipo B con el ID ${createProgramacionDto.id_equipo_B} no se encontró`);
    }
  
    const evento = await this.eventoRepository.findOneBy({
      id:createProgramacionDto.id_evento
    })

    if(!evento){
      throw new NotFoundException(`evento con el ID ${createProgramacionDto.id_evento} no se encontro`)
    }
  
    const juez = await this.juezRepository.findOneBy({
      id:createProgramacionDto.id_juez
    })

    if(!juez){
      throw new NotFoundException(`juez con el ID ${createProgramacionDto.id_juez} no se encontro`)
    }

    const programacion = this.programacionRepository.create({
      ...createProgramacionDto,
      evento,
      equipoA,
      equipoB,
      juez
    })

    return this.programacionRepository.save(programacion)
  }

  async findAll() {
    return this.programacionRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} programacion`;
  }

  update(id: number, updateProgramacionDto: UpdateProgramacionDto) {
    return `This action updates a #${id} programacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} programacion`;
  }
}

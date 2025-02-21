import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resultado } from './entities/resultado.entity';
import { Repository } from 'typeorm';
import { Equipo } from '../equipo/entities/equipo.entity';
import { Programacion } from '../programacion/entities/programacion.entity';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectRepository(Resultado)
    private readonly resultadoRepository: Repository<Resultado>,
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
    @InjectRepository(Programacion)
    private readonly programacionRepository: Repository<Programacion>,
  ){}

  async create(createResultadoDto: CreateResultadoDto) {
    const equipoA = await this.equipoRepository.findOneBy({
      id: createResultadoDto.id_equipo_A,
    });

    const equipoB = await this.equipoRepository.findOneBy({
      id: createResultadoDto.id_equipo_B
    });

    if (!equipoA) {
      throw new NotFoundException(`El equipo A con el ID ${createResultadoDto.id_equipo_A} no se encontró`);
    }

    if (!equipoB) {
      throw new NotFoundException(`El equipo B con el ID ${createResultadoDto.id_equipo_B} no se encontró`);
    }
  
    const programacion = await this.programacionRepository.findOneBy({
      id:createResultadoDto.id_programacion
    })

    if(!programacion){
      throw new NotFoundException(`evento con el ID ${createResultadoDto.id_programacion} no se encontro`)
    }
  
    const resultado = this.resultadoRepository.create({
      ...createResultadoDto,
      programacion,
      equipoA,
      equipoB,
    })
    return this.resultadoRepository.save(resultado);
  }

  findAll() {
    return this.resultadoRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} resultado`;
  }

  update(id: number, updateResultadoDto: UpdateResultadoDto) {
    return `This action updates a #${id} resultado`;
  }

  remove(id: number) {
    return `This action removes a #${id} resultado`;
  }
}

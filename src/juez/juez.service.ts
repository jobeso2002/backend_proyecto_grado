import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJuezDto } from './dto/create-juez.dto';
import { UpdateJuezDto } from './dto/update-juez.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Juez } from './entities/juez.entity';
import { Repository } from 'typeorm';
import { Evento } from '../evento/entities/evento.entity';
import { Persona } from '../persona/entities/persona.entity';

@Injectable()
export class JuezService {
  constructor(
    @InjectRepository(Juez)
    private readonly juezRepository: Repository<Juez>,
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,

  ){}

  async create(createJuezDto: CreateJuezDto) {
    const evento = await this.eventoRepository.findOneBy({
      id: createJuezDto.id_evento
    })

    if(!evento){
      throw new NotFoundException(`evento con el ID ${createJuezDto.id_evento} no se encontro`)
    }

    const persona = await this.personaRepository.findOneBy({
      id: createJuezDto.id_persona
    })

    if(!persona){
      throw new NotFoundException(`la persona con el ID ${createJuezDto.id_persona} no encontrado`)
    }

    const juez = this.juezRepository.create({
      ...createJuezDto,
      persona,
      evento
    });
    return this.juezRepository.save(juez);
  }

  findAll() {
    return this.juezRepository.find({relations: ['evento', 'persona']});
  }

  findOne(id: number) {
    return this.juezRepository.findOne({ 
      where: {id},
      relations: ['evento', 'persona']
     });
  }

  update(id: number, updateJuezDto: UpdateJuezDto) {
    return `This action updates a #${id} juez`;
  }

  remove(id: number) {
    return `This action removes a #${id} juez`;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDirTecnicoDto } from './dto/create-dir-tecnico.dto';
import { UpdateDirTecnicoDto } from './dto/update-dir-tecnico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DirTecnico } from './entities/dir-tecnico.entity';
import { Repository } from 'typeorm';
import { Clube } from '../clubes/entities/clube.entity';
import { Persona } from '../persona/entities/persona.entity';

@Injectable()
export class DirTecnicoService {
  constructor(
    @InjectRepository(DirTecnico)
    private readonly dirtecnicoRepository: Repository<DirTecnico>,
    @InjectRepository(Clube)
    private readonly clubeRepository: Repository<Clube>,
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    
  ){}

  async create(createDirTecnicoDto: CreateDirTecnicoDto) {
    const club = await this.clubeRepository.findOneBy({
      id: createDirTecnicoDto.id_club
    })

    if(!club){
      throw new NotFoundException(`el club con el ID ${createDirTecnicoDto.id_club} no encontrado`)
    }

    const persona = await this.personaRepository.findOneBy({
      id: createDirTecnicoDto.id_persona
    })

    if(!persona){
      throw new NotFoundException(`la persona con el ID ${createDirTecnicoDto.id_persona} no encontrado`)
    }

    const tecnico = this.dirtecnicoRepository.create({
      ...createDirTecnicoDto,
      club,
      persona
    });
    return this.dirtecnicoRepository.save(tecnico)
  }

  findAll() {
    return this.dirtecnicoRepository.find({relations: ['club', 'persona']});
  }

  findOne(id: number) {
    return this.dirtecnicoRepository.findOne({ 
      where: {id},
      relations: ['club', 'persona']
     });
  }

  update(id: number, updateDirTecnicoDto: UpdateDirTecnicoDto) {
    return `This action updates a #${id} dirTecnico`;
  }

  remove(id: number) {
    return `This action removes a #${id} dirTecnico`;
  }
}

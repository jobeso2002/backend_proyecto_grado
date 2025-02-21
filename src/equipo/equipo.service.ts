import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipo } from './entities/equipo.entity';
import { Repository } from 'typeorm';
import { Clube } from '../clubes/entities/clube.entity';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
    @InjectRepository(Clube)
    private readonly clubeRepository: Repository<Clube>
  ){}

  async create(createEquipoDto: CreateEquipoDto) {
    const club = await this.clubeRepository.findOneBy({
      id: createEquipoDto.id_club
    })

    if(!club){
      throw new NotFoundException(`el club con el ID ${createEquipoDto.id_club} no encontrado`)
    }

    const equipo = this.equipoRepository.create({
      ...createEquipoDto,
      club
    });
    return this.equipoRepository.save(equipo)
  }

  findAll() {
    return this.equipoRepository.find({relations: ['club']});
  }

  findOne(id: number) {
    return this.equipoRepository.findOne({ 
      where: {id},
      relations: ['club']
     });
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return `This action updates a #${id} equipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}

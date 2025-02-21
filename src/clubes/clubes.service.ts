import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClubeDto } from './dto/create-clube.dto';
import { UpdateClubeDto } from './dto/update-clube.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Clube } from './entities/clube.entity';
import { DirTecnico } from '../dir-tecnico/entities/dir-tecnico.entity';

@Injectable()
export class ClubesService {
  constructor(
    @InjectRepository(Clube)
    private readonly clubRepository: Repository<Clube>,
    @InjectRepository(DirTecnico)
    private readonly directorRepository: Repository<DirTecnico>,
    
  ) {}

  async create(createClubeDto: CreateClubeDto) {
    const directortec = await this.directorRepository.findByIds(createClubeDto.id_dir_tecnico)

    if(!directortec){
      throw new NotFoundException(`director tecnico con el ID ${createClubeDto.id_dir_tecnico} no encontrado`)
    }

    const equipo = this.clubRepository.create({
      ...createClubeDto,
      directortec
    });
    return this.clubRepository.save(equipo);
  }

  findAll() {
    return this.clubRepository.find({ relations: ['deportista', 'directortec'] });
  }

  findOne(id: number) {
    return this.clubRepository.findOne({
      where: { id },
      relations: ['deportista', 'directortec'],
    });
  }

  update(id: number, updateClubeDto: UpdateClubeDto) {
    return `This action updates a #${id} clube`;
  }

  remove(id: number) {
    return `This action removes a #${id} clube`;
  }
}

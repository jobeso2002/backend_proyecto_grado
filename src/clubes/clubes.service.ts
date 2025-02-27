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
    const directortec = await this.directorRepository.findByIds(
      createClubeDto.id_dir_tecnico,
    );

    if (!directortec) {
      throw new NotFoundException(
        `director tecnico con el ID ${createClubeDto.id_dir_tecnico} no encontrado`,
      );
    }

    const equipo = this.clubRepository.create({
      ...createClubeDto,
      directortec,
    });
    return this.clubRepository.save(equipo);
  }

  async findAll() {
    return this.clubRepository.find({
      relations: ['deportista', 'directortec'],
    });
  }

  async findOne(id: number) {
    const club = await this.clubRepository.findOne({
      where: { id },
      relations: ['deportista', 'directortec'],
    });
    if (!club) {
      throw new NotFoundException(`Club con ID ${id} no encontrado`);
    }

    return club;
  }

  async update(id: number, updateClubeDto: UpdateClubeDto) {
    const club = await this.clubRepository.findOne({
      where: { id },
      relations: ['directortec'],
    });

    if (!club) {
      throw new NotFoundException(`Club con ID ${id} no encontrado`);
    }

    // Si se proporciona un id_dir_tecnico, verificar si existe
    if (updateClubeDto.id_dir_tecnico) {
      const directortec = await this.directorRepository.findByIds(
        updateClubeDto.id_dir_tecnico,
      );

      if (!directortec) {
        throw new NotFoundException(
          `Director técnico con ID ${updateClubeDto.id_dir_tecnico} no encontrado`,
        );
      }

      club.directortec = directortec;
    }

    Object.assign(club, updateClubeDto);
    return this.clubRepository.save(club);
  }

  async remove(id: number) {
    const club = await this.clubRepository.findOne({ where: { id } });

    if (!club) {
      throw new NotFoundException(`Club con ID ${id} no encontrado`);
    }

    await this.clubRepository.remove(club);
    return { message: `Club con ID ${id} eliminado correctamente` };
  }
}

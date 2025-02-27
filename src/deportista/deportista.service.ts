import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Deportista } from './entities/deportista.entity';
import { Repository } from 'typeorm';
import { Clube } from '../clubes/entities/clube.entity';
import { Persona } from '../persona/entities/persona.entity';

@Injectable()
export class DeportistaService {
  constructor(
    @InjectRepository(Deportista)
    private readonly deportistaRepositori: Repository<Deportista>,
    @InjectRepository(Clube)
    private readonly clubRepository: Repository<Clube>,
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async create(createDeportistaDto: CreateDeportistaDto) {
    const club = await this.clubRepository.findOneBy({
      id: createDeportistaDto.id_club,
    });

    if (!club) {
      throw new NotFoundException(
        `deportista con el ID ${createDeportistaDto.id_club} no encontrado`,
      );
    }

    const persona = await this.personaRepository.findOneBy({
      id: createDeportistaDto.id_persona,
    });

    if (!persona) {
      throw new NotFoundException(
        `la persona con el ID ${createDeportistaDto.id_persona} no encontrado`,
      );
    }

    const deportista = this.deportistaRepositori.create({
      ...createDeportistaDto,
      persona,
      club,
    });
    return this.deportistaRepositori.save(deportista);
  }

  async findAll() {
    return this.deportistaRepositori.find({ relations: ['club', 'persona'] });
  }

  async findOne(id: number) {
    return this.deportistaRepositori.findOne({
      where: { id },
      relations: ['club', 'persona'],
    });
  }

  async update(id: number, updateDeportistaDto: UpdateDeportistaDto) {
    const deportista = await this.deportistaRepositori.findOne({
      where: { id },
      relations: ['club', 'persona'],
    });

    if (!deportista) {
      throw new NotFoundException(`Deportista con ID ${id} no encontrado`);
    }

    if (updateDeportistaDto.id_club) {
      const club = await this.clubRepository.findOneBy({
        id: updateDeportistaDto.id_club,
      });

      if (!club) {
        throw new NotFoundException(
          `Club con ID ${updateDeportistaDto.id_club} no encontrado`,
        );
      }

      deportista.club = club;
    }

    if (updateDeportistaDto.id_persona) {
      const persona = await this.personaRepository.findOneBy({
        id: updateDeportistaDto.id_persona,
      });

      if (!persona) {
        throw new NotFoundException(
          `Persona con ID ${updateDeportistaDto.id_persona} no encontrada`,
        );
      }

      deportista.persona = persona;
    }

    Object.assign(deportista, updateDeportistaDto);
    return await this.deportistaRepositori.save(deportista);
  }

  async remove(id: number) {
    const deportista = await this.deportistaRepositori.findOne({
      where: { id },
    });

    if (!deportista) {
      throw new NotFoundException(`Deportista con ID ${id} no encontrado`);
    }

    await this.deportistaRepositori.remove(deportista);
    return { message: `Deportista con ID ${id} eliminado correctamente` };
  }
}

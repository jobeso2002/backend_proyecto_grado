import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
import { UpdateTransferenciaDto } from './dto/update-transferencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transferencia } from './entities/transferencia.entity';
import { Repository } from 'typeorm';
import { Clube } from '../clubes/entities/clube.entity';
import { Deportista } from '../deportista/entities/deportista.entity';

@Injectable()
export class TransferenciaService {
  constructor(
    @InjectRepository(Transferencia)
    private readonly transferenciaRepository: Repository<Transferencia>,
    @InjectRepository(Clube)
    private readonly clubeRepository: Repository<Clube>,
    @InjectRepository(Deportista)
    private readonly deportistaRepository: Repository<Deportista>
  ){}

 async create(createTransferenciaDto: CreateTransferenciaDto) {
    const club_origen = await this.clubeRepository.findOneBy({
      id: createTransferenciaDto.id_club_origen 
    });

    const club_destino = await this.clubeRepository.findOneBy({
      id: createTransferenciaDto.id_club_destino
    });

    if (!club_origen) {
      throw new NotFoundException(`El equipo A con el ID ${createTransferenciaDto.id_club_origen} no se encontró`);
    }

    if (!club_destino) {
      throw new NotFoundException(`El equipo B con el ID ${createTransferenciaDto.id_club_destino} no se encontró`);
    }
  
    const deportista = await this.deportistaRepository.findOneBy({
      id:createTransferenciaDto.id_deportista
    })

    if(!deportista){
      throw new NotFoundException(`evento con el ID ${createTransferenciaDto.id_deportista} no se encontro`)
    }
  
    const transferencia = this.transferenciaRepository.create({
      ...createTransferenciaDto,
      club_destino,
      club_origen,
      deportista
    })

    return this.transferenciaRepository.save(transferencia);
  }

  findAll() {
    return this.transferenciaRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} transferencia`;
  }

  update(id: number, updateTransferenciaDto: UpdateTransferenciaDto) {
    return `This action updates a #${id} transferencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} transferencia`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePermisionDto } from './dto/create-permision.dto';
import { UpdatePermisionDto } from './dto/update-permision.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Permision } from './entities/permision.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PermisionService {
  constructor(
    @InjectRepository(Permision)
    private PermisionRepository: Repository<Permision>,
  ){}

  async create(createPermisionDto: CreatePermisionDto) {
    const permiso = await this.PermisionRepository.create(createPermisionDto)
    return this.PermisionRepository.save(permiso) 
  }

  findAll() {
    return `This action returns all permision`;
  }

  async findOne(id: number[]) {
    return await this.PermisionRepository.findByIds(id);
  }

  update(id: number, updatePermisionDto: UpdatePermisionDto) {
    return `This action updates a #${id} permision`;
  }

  remove(id: number) {
    return `This action removes a #${id} permision`;
  }
}

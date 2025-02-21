import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { RolesService } from 'src/roles/roles.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    private readonly roleService: RolesService,
  ) {}

 async create(createPersonaDto: CreatePersonaDto) {
    //verificar si el correo exise
    const existeEmail = await this.personaRepository.findOneBy({
      email: createPersonaDto.email
    })

    if(existeEmail){
      throw new BadRequestException('el correo ya esta registrado');
    }

    //verificar si el numero de documento ya esta registrado
    const existeDocumento = await this.personaRepository.findOneBy({
      numero_documento: createPersonaDto.numero_documento
    })

    if(existeDocumento){
      throw new BadRequestException('el numero de documento ya esta registrado');
    }

    const salt = await bcrypt.genSalt(10);
    createPersonaDto.password = await bcrypt.hash(createPersonaDto.password, salt);
    return this.personaRepository.save(createPersonaDto);
  }

  findOneByEmail(email: string) {
    return this.personaRepository.findOneBy({ email });
  }

  async findOneByEmailWithPassword(email: string) {
    const findUser = await this.personaRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password'],
      relations: ['role'],
    });

    if (!findUser?.password) {
      return { findUser: null, roles_permision: null };
    }
    
    const roles_permision = await this.roleService.find_role(findUser.role.id);
    return { findUser, roles_permision };
  }

  findAll() {
    return `This action returns all persona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}

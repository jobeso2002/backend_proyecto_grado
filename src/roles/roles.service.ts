import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { PermisionService } from '../permision/permision.service';
import { RoleType } from '../common/enums/tiporole.enum';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly RoleRepository: Repository<Role>,
    private readonly Permisoservice: PermisionService
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = this.RoleRepository.create({name:createRoleDto.name})
    const permiso = await this.Permisoservice.findOne(createRoleDto.permisionId)

    role.permisions = permiso
    return this.RoleRepository.save(role)
  }

  async find_role(id:number){
    const role = await this.RoleRepository.findOne({where:{id}, relations:['permisions']})

    return role?.permisions.map((permiso) => permiso.name || [])

  }

  findname(name:RoleType){
    return this.RoleRepository.findOneBy({name})    
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}

import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { PersonaService } from '../persona/persona.service';



@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: PersonaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerAuth: RegisterDto) {
    const user = await this.usersService.findOneByEmail(registerAuth.email); //verificar si el usuario existe con la condicion de user

    if (user) {
      throw new BadRequestException('el usuario ya existe');
    }

    registerAuth.password = await  bcryptjs.hash(registerAuth.password, 10);
    const newUser = await this.usersService.create(registerAuth); 
    return {  email: newUser.email };
  }

  async login({ email, password }: LoginDto) {
    const users = await this.usersService.findOneByEmailWithPassword(email);
    if (!users) {
      throw new UnauthorizedException('Email no es correcto');
    }
    const isPasswordValid = await bcryptjs.compare(
      password,
      users.findUser?.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Password no es correcto');
    }

    const payload = {
      email: users.findUser?.email,
      role: users.findUser?.role.name,
      permison: users.roles_permision,
    };
    
    const token = this.jwtService.sign(payload);


    return { token, email };
  }
}

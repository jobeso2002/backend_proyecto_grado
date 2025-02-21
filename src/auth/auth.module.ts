import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';


import { ConfigModule, ConfigService } from '@nestjs/config';
import { PersonaModule } from 'src/persona/persona.module';

@Module({
  imports: [PersonaModule, ConfigModule, 
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>("JWT_SECRET");
        
        return {
          secret,
          signOptions: { expiresIn: "1d" },
        };
     },
      inject: [ConfigService],
    }),
    
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule]
})
export class AuthModule {}

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeaders(request);

    console.log(' Headers Recibidos:', request.headers);
    console.log(' Token Extraído:', token);

    // Permitir acceso libre al endpoint de registro
   

    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      console.log('Token válido, payload:', payload);
      request.user = payload;
      return true;
    } catch (error) {
      console.error('Error al verificar el token:', error.message);
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }

  private extractTokenFromHeaders(request: Request): string | undefined {
    const authHeader = request.headers.authorization;
    if (!authHeader) return undefined;

    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}
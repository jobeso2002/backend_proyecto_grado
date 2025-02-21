import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger =new Logger('application');

  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Cambia '*' por el dominio específico en producción
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permitir cookies y tokens de sesión
    allowedHeaders: 'Content-Type, Authorization',
    
  });

  const config = new DocumentBuilder()
  .setTitle('API Example')
  .setDescription('API Documentation')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    },
    'mi secreto',
  )

  .setVersion('1.0')
  .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT || 3000);
  logger.log(`doc on: http://localhost:${process.env.PORT || 3000}/api`)
}
bootstrap();

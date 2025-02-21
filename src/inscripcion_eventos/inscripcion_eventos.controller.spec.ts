import { Test, TestingModule } from '@nestjs/testing';
import { InscripcionEventosController } from './inscripcion_eventos.controller';
import { InscripcionEventosService } from './inscripcion_eventos.service';

describe('InscripcionEventosController', () => {
  let controller: InscripcionEventosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InscripcionEventosController],
      providers: [InscripcionEventosService],
    }).compile();

    controller = module.get<InscripcionEventosController>(InscripcionEventosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

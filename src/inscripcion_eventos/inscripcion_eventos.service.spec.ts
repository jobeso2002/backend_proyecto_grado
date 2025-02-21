import { Test, TestingModule } from '@nestjs/testing';
import { InscripcionEventosService } from './inscripcion_eventos.service';

describe('InscripcionEventosService', () => {
  let service: InscripcionEventosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InscripcionEventosService],
    }).compile();

    service = module.get<InscripcionEventosService>(InscripcionEventosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

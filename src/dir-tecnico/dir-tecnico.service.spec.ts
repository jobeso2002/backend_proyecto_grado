import { Test, TestingModule } from '@nestjs/testing';
import { DirTecnicoService } from './dir-tecnico.service';

describe('DirTecnicoService', () => {
  let service: DirTecnicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirTecnicoService],
    }).compile();

    service = module.get<DirTecnicoService>(DirTecnicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

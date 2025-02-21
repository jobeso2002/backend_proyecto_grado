import { Test, TestingModule } from '@nestjs/testing';
import { DirTecnicoController } from './dir-tecnico.controller';
import { DirTecnicoService } from './dir-tecnico.service';

describe('DirTecnicoController', () => {
  let controller: DirTecnicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirTecnicoController],
      providers: [DirTecnicoService],
    }).compile();

    controller = module.get<DirTecnicoController>(DirTecnicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

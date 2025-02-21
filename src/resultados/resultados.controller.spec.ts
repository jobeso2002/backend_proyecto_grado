import { Test, TestingModule } from '@nestjs/testing';
import { ResultadosController } from './resultados.controller';
import { ResultadosService } from './resultados.service';

describe('ResultadosController', () => {
  let controller: ResultadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultadosController],
      providers: [ResultadosService],
    }).compile();

    controller = module.get<ResultadosController>(ResultadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

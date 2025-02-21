import { Test, TestingModule } from '@nestjs/testing';
import { JuezController } from './juez.controller';
import { JuezService } from './juez.service';

describe('JuezController', () => {
  let controller: JuezController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JuezController],
      providers: [JuezService],
    }).compile();

    controller = module.get<JuezController>(JuezController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

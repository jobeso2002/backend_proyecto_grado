import { Test, TestingModule } from '@nestjs/testing';
import { JuezService } from './juez.service';

describe('JuezService', () => {
  let service: JuezService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JuezService],
    }).compile();

    service = module.get<JuezService>(JuezService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BreweriesService } from './breweries.service';

describe('BreweriesService', () => {
  let service: BreweriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreweriesService],
    }).compile();

    service = module.get<BreweriesService>(BreweriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AppelOffreService } from './appel-offre.service';

describe('AppelOffreService', () => {
  let service: AppelOffreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppelOffreService],
    }).compile();

    service = module.get<AppelOffreService>(AppelOffreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

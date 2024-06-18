import { Test, TestingModule } from '@nestjs/testing';
import { AppelOffreController } from './appel-offre.controller';
import { AppelOffreService } from './appel-offre.service';

describe('AppelOffreController', () => {
  let controller: AppelOffreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppelOffreController],
      providers: [AppelOffreService],
    }).compile();

    controller = module.get<AppelOffreController>(AppelOffreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

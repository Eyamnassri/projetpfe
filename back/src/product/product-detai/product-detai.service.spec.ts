import { Test, TestingModule } from '@nestjs/testing';
import { ProductDetaiService } from './product-detai.service';

describe('ProductDetaiService', () => {
  let service: ProductDetaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductDetaiService],
    }).compile();

    service = module.get<ProductDetaiService>(ProductDetaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

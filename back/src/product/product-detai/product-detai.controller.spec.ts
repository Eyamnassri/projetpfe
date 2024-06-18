import { Test, TestingModule } from '@nestjs/testing';
import { ProductDetaiController } from './product-detai.controller';
import { ProductDetaiService } from './product-detai.service';

describe('ProductDetaiController', () => {
  let controller: ProductDetaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductDetaiController],
      providers: [ProductDetaiService],
    }).compile();

    controller = module.get<ProductDetaiController>(ProductDetaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

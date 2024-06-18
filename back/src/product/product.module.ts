import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
// import { UnitModule } from './unit/unit.module';
// import { ProductDetaiModule } from './product-detai/product-detai.module';
// import { PrixModule } from './prix/prix.module';
// import { QuantityModule } from './quantity/quantity.module';
// import { CategoryModule } from './category/category.module';
// import { MarkModule } from './mark/mark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  // imports: [TypeOrmModule.forFeature(Product)],
  imports:[TypeOrmModule.forFeature([Product])]
})
export class ProductModule {}

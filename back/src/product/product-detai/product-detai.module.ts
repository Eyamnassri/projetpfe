import { Module } from '@nestjs/common';
import { ProductDetaiService } from './product-detai.service';
import { ProductDetaiController } from './product-detai.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetai } from './entities/product-detai.entity';

@Module({
  controllers: [ProductDetaiController],
  providers: [ProductDetaiService],
  imports:[TypeOrmModule.forFeature([ProductDetai])]
})
export class ProductDetaiModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductDetaiService } from './product-detai.service';
import { CreateProductDetaiDto } from './dto/create-product-detai.dto';
import { UpdateProductDetaiDto } from './dto/update-product-detai.dto';

@Controller('product-detai')
export class ProductDetaiController {
  constructor(private readonly productDetaiService: ProductDetaiService) {}

  @Post('create')
  create(@Body() createProductDetaiDto: CreateProductDetaiDto) {
    return this.productDetaiService.create(createProductDetaiDto);
  }

  @Get('list_ProductDetai')
  findAll() {
    return this.productDetaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productDetaiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDetaiDto: UpdateProductDetaiDto) {
    return this.productDetaiService.update(+id, updateProductDetaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDetaiService.remove(+id);
  }
}

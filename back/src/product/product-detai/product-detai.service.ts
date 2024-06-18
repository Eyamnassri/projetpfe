import { Injectable } from '@nestjs/common';
import { CreateProductDetaiDto } from './dto/create-product-detai.dto';
import { UpdateProductDetaiDto } from './dto/update-product-detai.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDetai } from './entities/product-detai.entity';

@Injectable()
export class ProductDetaiService {
   constructor(
  @InjectRepository(ProductDetai)
  private readonly ProductDetaiRespository: Repository<ProductDetai>,
) {}
  create(createProductDetaiDto: CreateProductDetaiDto) {
    const unity = this.ProductDetaiRespository.create(createProductDetaiDto);
    // ProductDetai.createdBy=idUser
    ProductDetai.active=true
    return this.ProductDetaiRespository.save(unity)
  }

  findAll() {
    return this.ProductDetaiRespository.findAndCount() 
  }

  findOne(id: number) {
    return  this.ProductDetaiRespository.findOne( {
      where: { id:id }
    })
  }

  async update(id: number, updateProductDetaiDto: UpdateProductDetaiDto) {
    await  this.ProductDetaiRespository.update(id,updateProductDetaiDto)
    return this.findOne(id)
  }

  remove(id: number) {
    return this.ProductDetaiRespository.delete(id)
  }
}

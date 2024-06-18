import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from 'src/article/dto/create-article.dto';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
) {}

async create(productData:CreateArticleDto): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
}

async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
}

async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne({where:{id:id}});
}

async update(id: number, productData: Partial<Product>): Promise<Product> {
    const product = await this.productRepository.findOne({where:{id:id}});
    if (!product) {
        throw new Error('Product not found');
    }
    await this.productRepository.update(id, productData);
    return await this.productRepository.findOne({where:{id:id}});
}

async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
}

}

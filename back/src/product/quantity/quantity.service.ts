import { Injectable } from '@nestjs/common';
import { CreateQuantityDto } from './dto/create-quantity.dto';
import { UpdateQuantityDto } from './dto/update-quantity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quantity } from './entities/quantity.entity';
import { Repository } from 'typeorm';


@Injectable()
export class QuantityService {
   constructor(
  @InjectRepository(Quantity)
  private readonly QuantityRepository:Repository<Quantity>,
) {}
  create(createQuantityDto: CreateQuantityDto) {
    const Quantity = this.QuantityRepository.create();
    // Quantity.createdBy=idUser
    Quantity.active=true
    return this.QuantityRepository.save(Quantity)
  }

  findAll() {
    return this.QuantityRepository.findAndCount() 
  }

  findOne(id: number) {
    return this.QuantityRepository.findOne( {
      where: { id:id }
    });
  }

  async update(id: number, updateQuantityDto: UpdateQuantityDto) {
    await  this.QuantityRepository.update(id,updateQuantityDto)
    return this.findOne(id)


  }

  remove(id: number) {
    return `This action removes a #${id} quantity`;
  }
}

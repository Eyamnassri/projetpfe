import { Injectable } from '@nestjs/common';
import { CreateCommisionDto } from './dto/create-commision.dto';
import { UpdateCommisionDto } from './dto/update-commision.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commision } from './entities/commision.entity';

@Injectable()
export class CommisionsService {
  constructor(
    @InjectRepository(Commision)
    private commisionRepository: Repository<Commision>,
  ) {}








  async create(createCommisionDto: CreateCommisionDto,userId:number) {
    const commission = this.commisionRepository.create(createCommisionDto);
    createCommisionDto.userId=userId
 return   await  this.commisionRepository.save(commission);
  }

  findAll() {
  return this.commisionRepository.findAndCount()
  }

  findOne(id: number) {
 return this.commisionRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateCommisionDto: UpdateCommisionDto, userId:number) {
 const commision=this.findOne(id)
 console.log(updateCommisionDto)
 const commissionPreload = await this.commisionRepository.preload(await {
  id:id,
  userId:userId,
  ...commision,
 });
//  this.commisionRepository.save(commissionPreload)
 return 'hello'
  }


  remove(id: number) {
    return this.commisionRepository.delete(id)
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePrixDto } from './dto/create-prix.dto';
import { UpdatePrixDto } from './dto/update-prix.dto';
import { Prix } from './entities/prix.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PrixService {
  PrixRepository: any;
  constructor(
    @InjectRepository(Prix)
    private readonly PrixRespository : Repository<Prix>,
  ) {}
  create(createPrixDto: CreatePrixDto) {
   const Prix= this.PrixRespository.create(createPrixDto);
    // Prix.createdBy=idUser
    Prix.active=true
    return this.PrixRepository.save(Prix)
  }

  findAll() {
    return this.PrixRepository.findAndCount()
  }

  findOne(id: number) {
    return   this.PrixRepository.findOne( {
      where: { id:id }
    })
  }

  async update(id: number, updatePrixDto: UpdatePrixDto) {
    await  this.PrixRepository.update(id,updatePrixDto)
    return this.findOne(id)
  }

  remove(id: number) {
    return this.PrixRepository.delete(id)
}
}

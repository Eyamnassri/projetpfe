import { Injectable } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { Unit } from './entities/unit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(Unit)
    private readonly UnitRepository: Repository<Unit>,
  ) {}
  create(createUnitDto: CreateUnitDto) {

    const unity = this.UnitRepository.create(createUnitDto);
    // unity.createdBy=idUser
    unity.active=true
    return this.UnitRepository.save(unity)
  }

  findAll() {
 return this.UnitRepository.findAndCount() }

  findOne(userId: number) {
    return  this.UnitRepository.findOne( {
      where: { id:userId }
    })
  }

  async update(id: number, updateUnitDto: UpdateUnitDto) {

    await  this.UnitRepository.update(id,updateUnitDto)
    return this.findOne(id)


    return this.findOne(id)
  }

  remove(id: number) {
    return this.UnitRepository.delete(id)
}
}

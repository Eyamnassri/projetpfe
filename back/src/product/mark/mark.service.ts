import { Injectable } from '@nestjs/common';
import { CreateMarkDto } from './dto/create-mark.dto';
import { UpdateMarkDto } from './dto/update-mark.dto';
import { Mark } from './entities/mark.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MarkService {
  constructor(
    @InjectRepository(Mark)
    private readonly MarkRepository: Repository<Mark>,
  ) {}
  create(createMarkDto: CreateMarkDto) {
    let mark = this.MarkRepository.create(createMarkDto);
    // unity.createdBy=idUser
  mark.active=true
    return this.MarkRepository.save(mark)
  
  }

  findAll() {
    return `This action returns all mark`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mark`;
  }

  update(id: number, updateMarkDto: UpdateMarkDto) {
    return `This action updates a #${id} mark`;
  }

  remove(id: number) {
    return `This action removes a #${id} mark`;
  }
}

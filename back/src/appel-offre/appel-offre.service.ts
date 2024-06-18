import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { AppelOffre } from './entities/appel-offre.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAppelOffreDto } from './dto/create-appel-offre.dto';
import { UpdateAppelOffreDto } from './dto/update-appel-offre.dto';


@Injectable()
export class  AppelOffreService {
  constructor(
    @InjectRepository(AppelOffre)
    private readonly AppelOffreRepository: Repository<AppelOffre>,
  ) {}

  findAll(): Promise<any> {
    return this.AppelOffreRepository.findAndCount();
  }

  findOne(id: number): Promise<AppelOffre> {
    return this.AppelOffreRepository.findOne({where:{id:id},});
  }

  create(createAppelOffreDto: CreateAppelOffreDto): Promise<AppelOffre> {
    return this.AppelOffreRepository.save(createAppelOffreDto);
  }

  async update(id: number,  updateAppelOffreDto: UpdateAppelOffreDto): Promise<AppelOffre> {
    await this.AppelOffreRepository.update(id, updateAppelOffreDto);
    return this.AppelOffreRepository.findOne({where:{id:id}});
  }

  async remove(id: number): Promise<void> {
    await this.AppelOffreRepository.delete(id);
  }
}

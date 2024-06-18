import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEtatDto } from './dto/create-etat.dto';
import { UpdateEtatDto } from './dto/update-etat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Etat } from './entities/etat.entity';
@Injectable()
export class EtatService {
  constructor(
    @InjectRepository(Etat)
    private etatRepository: Repository<Etat>,
  ) {}
  async create(createEtatDto: CreateEtatDto): Promise<Etat> {
    console.log(createEtatDto)
    const newEtat = this.etatRepository.create(createEtatDto);
    return this.etatRepository.save(newEtat);
  }

  async findAll(): Promise<Etat[]> {
    return this.etatRepository.find();
  }

  async findOne(id: number): Promise<Etat> {
    const etat = await this.etatRepository.findOne({where:{id:id}});
    if (!etat) {
      throw new NotFoundException(`Etat with ID ${id} not found`);
    }
    return etat;
  }
  async findOneEtatByDemandeId(id: number): Promise<Etat> {
    const etat = await this.etatRepository.findOne({where:{demandeId:id}});
    if (!etat) {
      throw new NotFoundException(`Etat with ID ${id} not found`);
    }
    return etat;
  }

  async update(id: number, updateEtatDto: UpdateEtatDto): Promise<Etat> {
    await this.etatRepository.update(id, updateEtatDto);
    const updatedEtat = await this.etatRepository.findOne({where:{id:id}});
    if (!updatedEtat) {
      throw new NotFoundException(`Etat with ID ${id} not found`);
    }
    return updatedEtat;
  }

  async remove(id: number): Promise<void> {
    const result = await this.etatRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Etat with ID ${id} not found`);
    }
  }
}

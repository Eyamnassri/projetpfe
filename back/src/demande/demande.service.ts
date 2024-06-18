import { Injectable } from '@nestjs/common';
import { CreateDemandeDto } from './dto/create-demande.dto';
import { UpdateDemandeDto } from './dto/update-demande.dto';
import { Demande } from './entities/demande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DemandeService {
  constructor(
    @InjectRepository(Demande)
    private demandeRepository: Repository<Demande>,
  ) {}

  async create(createDemandeDto: CreateDemandeDto,userId:number): Promise<Demande> {
    console.log(" demande" ,createDemandeDto)
    const demande = this.demandeRepository.create(createDemandeDto);
    createDemandeDto.userId=userId
    const savedDemande = await this.demandeRepository.save(demande);
    return savedDemande;
  }

  async findAll(userId:number) {
    console.log(userId)
    const demandes = await this.demandeRepository.findAndCount({where:{userId:userId},relations:['userId','etats']});
    return demandes;
  }

  async findOne(id: number): Promise<Demande | undefined> {
    const demande = await this.demandeRepository.findOne({where:{id:id}});
      return demande;
  }

  async update(id: number, updateDemandeDto: UpdateDemandeDto,userId:number): Promise<Demande> {
    const demande = await this.findOne(id);
    if (!demande) {
      throw new Error('Demande not found');
    }
updateDemandeDto.userId=userId
    this.demandeRepository.merge(demande, updateDemandeDto);
    const updatedDemande = await this.demandeRepository.save(demande);
    return updatedDemande;
  }

  async delete(id: number): Promise<void> {
    await this.demandeRepository.delete(id);
  }
   async countByDateCreated(): Promise<any[]> {
    return await this.demandeRepository
      .createQueryBuilder('demande')
      .select('DATE(demande.createdAt)', 'date')
      .addSelect('COUNT(*)', 'count')
      .groupBy('DATE(demande.createdAt)')
      .getRawMany();
  }
}

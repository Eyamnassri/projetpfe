import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpecificationDto } from './dto/create-specification.dto';
import { UpdateSpecificationDto } from './dto/update-specification.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specification } from './entities/specification.entity';
@Injectable()
export class SpecificationsService {
  constructor(
    @InjectRepository(Specification)
    private specificationRepository: Repository<Specification>,
  ) {}
  create(createSpecificationDto: CreateSpecificationDto,idUser:number) {
    
    const specification = this.specificationRepository.create(createSpecificationDto);
    createSpecificationDto.userId=idUser
    return this.specificationRepository.save(specification);
  }

  findAll() {
 return this.specificationRepository.findAndCount({relations:['demandeId','demandeId.etats']})
  
  }

  findOne(id: number) {
 
    return this.specificationRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateSpecificationDto: UpdateSpecificationDto) {
    console.log('ispecificationPreload',updateSpecificationDto)
  
   const specificationPreload = await this.specificationRepository.preload({
      id:+id,

      ...updateSpecificationDto,
    });
    console.log('ispecificationPreload',specificationPreload)
    // if (!specificationPreload) {

    //   throw new NotFoundException(`specification #${id} not found`);
    // }
    return await this.specificationRepository.save(specificationPreload);

  }

  remove(id: number) {
    return this.specificationRepository.delete(id)
  }
}

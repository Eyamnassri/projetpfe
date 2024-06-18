import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EtatService } from './etat.service';
import { CreateEtatDto } from './dto/create-etat.dto';
import { UpdateEtatDto } from './dto/update-etat.dto';
import { Console } from 'console';

@Controller('etat')
export class EtatController {
  constructor(private readonly etatService: EtatService) {}

  @Post('create-etat')
  create(@Body() createEtatDto: CreateEtatDto) {
    console.log("createEtatDto",createEtatDto)
    return this.etatService.create(createEtatDto);
  }

  @Get('get-liste-etat')
  findAll() {
    return this.etatService.findAll();
  }

  @Get('etat/:id')
  findOne(@Param('id') id: number) {
    return this.etatService.findOne(id);
  }
  @Get('etat-demande-id/:id')
  findOneByDemande(id:number){
    return this.etatService.findOneEtatByDemandeId(id)
  }

  @Patch('etat-update/:id')
  update(@Param('id') id: number, @Body() updateEtatDto: UpdateEtatDto) {
    return this.etatService.update(id, updateEtatDto);
  }

  @Delete('etat-delete/:id')
  remove(@Param('id') id: number) {
    return this.etatService.remove(id);
  }
}

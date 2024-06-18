import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppelOffreService } from './appel-offre.service';
import { CreateAppelOffreDto } from './dto/create-appel-offre.dto';
import { UpdateAppelOffreDto } from './dto/update-appel-offre.dto';

@Controller('appel-offer')
export class AppelOffreController {
  constructor(private readonly appelOffreService: AppelOffreService) {}

  @Post('create-appel-offer')
  create(@Body() createAppelOffreDto: CreateAppelOffreDto) {
    console.log(createAppelOffreDto)
    return this.appelOffreService.create(createAppelOffreDto);
  }

  @Get('list-appel-offer')
  findAll() {
    return this.appelOffreService.findAll();
  }

  @Get('appel-offer/:id')
  findOne(@Param('id') id: number) {
    return this.appelOffreService.findOne(id);
  }

  @Patch('update-offer/:id')
  update(@Param('id') id: number, @Body() updateAppelOffreDto: UpdateAppelOffreDto) {
    return this.appelOffreService.update(id, updateAppelOffreDto);
  }

  @Delete('delete-offer/:id')
  remove(@Param('id') id: number) {
    return this.appelOffreService.remove(id);
  }
}

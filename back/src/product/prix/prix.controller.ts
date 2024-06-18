import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrixService } from './prix.service';
import { CreatePrixDto } from './dto/create-prix.dto';
import { UpdatePrixDto } from './dto/update-prix.dto';

@Controller('prix')
export class PrixController {
  constructor(private readonly prixService: PrixService) {}

  @Post('create')
  create(@Body() createPrixDto: CreatePrixDto) {
    return this.prixService.create(createPrixDto);
  }

  @Get('list_prix')
  findAll() {
    return this.prixService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prixService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrixDto: UpdatePrixDto) {
    return this.prixService.update(+id, updatePrixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prixService.remove(+id);
  }
}

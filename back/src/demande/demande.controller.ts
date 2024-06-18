import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DemandeService } from './demande.service';
import { CreateDemandeDto } from './dto/create-demande.dto';
import { UpdateDemandeDto } from './dto/update-demande.dto';
import { Role } from 'src/user/entities/role';
import { Roles } from 'src/user/roles.decorator';
import { User } from 'src/user/user.decorator';

@Controller('demande')


export class DemandeController {
  constructor(private readonly demandeService: DemandeService) {}

  @Roles(Role.Admin,Role.demandeur)
  @Post('create-demande')
  @Roles(Role.demandeur)
  create(@Body() createDemandeDto: CreateDemandeDto, @User('id') idUser: number) {
    return this.demandeService.create(createDemandeDto,idUser);
  }
  @Roles(Role.Admin,Role.demandeur,Role.planificateur)
  @Get('list-demande')
  @Roles(Role.demandeur,Role.planificateur)
  findAll( @Param('id') idUser: number) {
    return this.demandeService.findAll(idUser);      
  }

  @Get('/:id')
  @Roles(Role.demandeur,Role.planificateur)
  findOne(@Param('id') id: number ,) {
    return this.demandeService.findOne(id);
  }

  @Patch('/:id')
  @Roles(Role.demandeur)
  update(@Param('id') id: number, @Body() updateDemandeDto: UpdateDemandeDto,@User('id') idUser: number) {
    return this.demandeService.update(id, updateDemandeDto,idUser);
  }

  @Delete('/:id')
  @Roles(Role.demandeur)
  remove(@Param('id') id: number) {
    return this.demandeService.delete(id);
  }
  @Get("result-list")
  @Roles(Role.demandeur)
  async countByDateCreated(): Promise<any[]> {
    return this.demandeService.countByDateCreated();
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SpecificationsService } from './specifications.service';
import { CreateSpecificationDto } from './dto/create-specification.dto';
import { UpdateSpecificationDto } from './dto/update-specification.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Role } from 'src/user/entities/role';
import { Roles } from 'src/user/roles.decorator';
import { User } from 'src/user/user.decorator';

@Controller('specifications')
export class SpecificationsController {
  constructor(private readonly specificationsService: SpecificationsService) {}

  @Post('create-specification')
  @Roles(Role.planificateur)
  create(@Body() createSpecificationDto: CreateSpecificationDto,@User('id') idUser: number) {
    return this.specificationsService.create(createSpecificationDto,idUser);
  }
  @Post('upload')
  @Roles(Role.planificateur)
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Get('list-specification')
  @Roles(Role.planificateur)
  findAll() {
  
    return this.specificationsService.findAll();
  }

  @Get('/:id')
  @Roles(Role.planificateur)

  findOne(@Param('id') id:number) {
    return this.specificationsService.findOne(id);
  }

  @Patch('update-specification/:id')
  // @Roles(Role.planificateur)

  update(@Param('id') id: number,@Body() updateSpecificationDto: UpdateSpecificationDto,) {
    console.log("hello",updateSpecificationDto,id)
    return this.specificationsService.update(id, updateSpecificationDto);

  }

  @Delete('/:id')
  @Roles(Role.planificateur)

  remove(@Param('id') id: number) {
    return this.specificationsService.remove(id);
  }
}

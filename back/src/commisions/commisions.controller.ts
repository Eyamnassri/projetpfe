import { Controller, Get, Post, Body, Patch, Param, Delete ,UseGuards} from '@nestjs/common';
import { CommisionsService } from './commisions.service';
import { CreateCommisionDto } from './dto/create-commision.dto';
import { UpdateCommisionDto } from './dto/update-commision.dto';
import { Role } from 'src/user/entities/role';
import { Roles } from 'src/user/roles.decorator'
import { User } from 'src/user/user.decorator';


@Controller('commisions')
export class CommisionsController {
  constructor(private readonly commisionsService: CommisionsService) {}

  @Post("create-commission")
  @Roles(Role.commissions)
  create(@Body() createCommisionDto: CreateCommisionDto, @User('id') idUser: number) {
    return this.commisionsService.create(createCommisionDto,idUser);
  }

  @Get("commission-list")
  @Roles(Role.commissions)
  findAll() {
    return this.commisionsService.findAll();
  }

  @Get('commission/:id')
  @Roles(Role.commissions)
  findOne(@Param('id') id: number,) {
    return this.commisionsService.findOne(+id);
  }

  @Patch('update-commission/:id')
  @Roles(Role.commissions)
  update(@Param('id') id: number, @Body() updateCommisionDto: UpdateCommisionDto,@User('id') idUser: number) {
    console.log(updateCommisionDto)
    return this.commisionsService.update(id, updateCommisionDto,idUser);
  }

  @Delete('delete-commission/:id')
  @Roles(Role.commissions)
  remove(@Param('id') id: number) {
    return this.commisionsService.remove(id);
  }
}         

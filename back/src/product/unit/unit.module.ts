import { Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { Unit } from './entities/unit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UnitController],
  providers: [UnitService],
  imports:[TypeOrmModule.forFeature([Unit])]
})
export class UnitModule {}

import { Module } from '@nestjs/common';
import { CommisionsService } from './commisions.service';
import { CommisionsController } from './commisions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commision } from './entities/commision.entity';

@Module({
  controllers: [CommisionsController],
  providers: [CommisionsService],
  imports:[TypeOrmModule.forFeature( [Commision])] 
})
export class CommisionsModule {}

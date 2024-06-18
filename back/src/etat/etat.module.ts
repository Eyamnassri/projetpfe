import { Module } from '@nestjs/common';
import { EtatService } from './etat.service';
import { EtatController } from './etat.controller';
import { Etat } from './entities/etat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EtatController],
  providers: [EtatService],
  imports:[TypeOrmModule.forFeature( [Etat])] 

})
export class EtatModule {}

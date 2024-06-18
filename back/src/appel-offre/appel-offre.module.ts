import { Module } from '@nestjs/common';
import { AppelOffreService } from './appel-offre.service';
import { AppelOffreController } from './appel-offre.controller';
import { AppelOffre } from './entities/appel-offre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppelOffreController],
  providers: [AppelOffreService],
  imports:[TypeOrmModule.forFeature( [AppelOffre])] 
})
export class AppelOffreModule {}

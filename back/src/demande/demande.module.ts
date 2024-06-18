import { Module } from '@nestjs/common';
import { DemandeService } from './demande.service';
import { DemandeController } from './demande.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demande } from './entities/demande.entity';
import { DataSource } from 'typeorm';
@Module({
  controllers: [DemandeController],
  providers: [DemandeService],
  imports:[TypeOrmModule.forFeature([Demande])]
})
export class DemandeModule {
  
}

import { Module } from '@nestjs/common';
import { PrixService } from './prix.service';
import { PrixController } from './prix.controller';
import { Prix } from './entities/prix.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PrixController],
  providers: [PrixService],
  imports:[TypeOrmModule.forFeature([Prix])]
})
export class PrixModule {}

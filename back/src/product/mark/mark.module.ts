import { Module } from '@nestjs/common';
import { MarkService } from './mark.service';
import { MarkController } from './mark.controller';
import { Mark } from './entities/mark.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MarkController],
  providers: [MarkService],
  imports:[TypeOrmModule.forFeature([Mark])]
})
export class MarkModule {}

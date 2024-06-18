import { Module } from '@nestjs/common';
import { SpecificationsService } from './specifications.service';
import { SpecificationsController } from './specifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specification } from './entities/specification.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [SpecificationsController],
  providers: [SpecificationsService],
  imports:[TypeOrmModule.forFeature([Specification]),   MulterModule.register({
    dest: './uploads',
  }),]
})
export class SpecificationsModule {}

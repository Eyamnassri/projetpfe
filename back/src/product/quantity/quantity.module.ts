import { Module } from '@nestjs/common';
import { QuantityService } from './quantity.service';
import { QuantityController } from './quantity.controller';
import { Quantity } from './entities/quantity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
controllers: [QuantityController],
providers: [QuantityService],
imports:[TypeOrmModule.forFeature([Quantity])]
})
export class QuantityModule {}

import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from './entities/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  imports:[TypeOrmModule.forFeature([Article])]
})
export class ArticleModule {}

import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
@Injectable()
export class ArticleService {
  demandeService: any;
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    // const demande = await this.demandeService.findOne(demandeId); 
    // if (!demande) {
    //   throw new Error('Demande not found');
    // }

    const article = this.articleRepository.create(createArticleDto);
    // article.demandeId = demandeId; 
    const savedArticle = await this.articleRepository.save(article);
    return savedArticle;
  }

  async findAll(): Promise<Article[]> {
    const articles = await this.articleRepository.find(); 
    return articles;
  }

  async findOne(id: number): Promise<Article | undefined> {
    const article  = await this.articleRepository.findOne({where:{ id:id}});
    return article;
  }

  async findByDemandeId(demandeId: number): Promise<Article[]> {
    const articles = await this.articleRepository.find({where:{ id:demandeId}});
    return articles;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto): Promise<Article> {
    const article = await this.findOne(id);
    if (!article) {
      throw new Error('Article not found');
    }

    this.articleRepository.merge(article, updateArticleDto);
    const updatedArticle = await this.articleRepository.save(article);
    return updatedArticle;
  }

  async delete(id: number): Promise<void> {
    await this.articleRepository.delete(id);
  }
}

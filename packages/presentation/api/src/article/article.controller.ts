import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/CreateArticle.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('all')
  async getAllArticle() {
    const articles = this.articleService.getArticles();
    return articles;
  }

  @Post('create')
  async createArticle(@Body() params: CreateArticleDto) {
    const article = this.articleService.createArticle(params);
    return article;
  }
}

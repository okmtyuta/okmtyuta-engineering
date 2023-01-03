import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('detail/:articleId')
  async getArticleById(@Param('articleId') articleId: string) {
    console.log(articleId);
    const article = this.articleService.getArticleById(articleId);
    return article;
  }

  @Post('create')
  async createArticle(@Body() params: CreateArticleDto) {
    const article = this.articleService.createArticle(params);
    return article;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { RegisterArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/RegisterArticle.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('list')
  async getAllArticle() {
    const articles = this.articleService.getArticles();
    return articles;
  }

  @Post('register')
  async registerArticle(@Body() params: RegisterArticleDto) {
    const article = this.articleService.registerArticle(params);
    return article;
  }

  @Get('deleteAll')
  async deleteAllArticle() {
    const deleteResult = this.articleService.deleteAllArticle();
    return deleteResult;
  }
}

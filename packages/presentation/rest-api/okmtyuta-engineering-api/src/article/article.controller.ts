import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('list')
  async getAllArticle() {
    const articles = this.articleService.getArticles();
    return articles;
  }
}

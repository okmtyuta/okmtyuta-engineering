import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get('list')
  async getAllArticle() {
    return {
      article: 'your',
    };
  }
}

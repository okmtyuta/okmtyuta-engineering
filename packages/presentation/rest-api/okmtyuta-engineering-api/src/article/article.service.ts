import { Injectable } from '@nestjs/common';
import { FetchArticles } from '@okmtyuta-engineering/infrastructure/lib/query/monopoly/okmtyuta-engineering/article/FetchArticles';

@Injectable()
export class ArticleService {
  async getArticles() {
    const articles = await (await new FetchArticles().fetch()).articles;
    return articles;
  }
}

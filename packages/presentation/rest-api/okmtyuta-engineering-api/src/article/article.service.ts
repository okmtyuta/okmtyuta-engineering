import { Injectable } from '@nestjs/common';
import { FetchArticles } from '@okmtyuta-engineering/infrastructure/lib/query/monopoly/okmtyuta-engineering/article/FetchArticles';
import { RegisterArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/RegisterArtilce.dto';
import { RegisterArticle } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/RegisterArticle';
import { DeleteAllArticle } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/DeleteAllArticles';

@Injectable()
export class ArticleService {
  async getArticles() {
    const articles = (await new FetchArticles().fetch()).articles;
    return articles;
  }

  async registerArticle(params: RegisterArticleDto) {
    const article = await new RegisterArticle().register(params);
    return article.article;
  }

  async deleteAllArticle() {
    const deleteResult = await new DeleteAllArticle().execute();
    return deleteResult.deleteResult;
  }
}

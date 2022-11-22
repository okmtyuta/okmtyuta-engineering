import { Injectable } from '@nestjs/common';
import { FetchAllArticles } from '@okmtyuta-engineering/infrastructure/lib/query/monopoly/okmtyuta-engineering/article/FetchAllArticles';
import { RegisterArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/RegisterArticle.dto';
import { RegisterArticle } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/RegisterArticle';
import { DeleteAllArticle } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/DeleteAllArticles';
import { AppDataSource } from '@okmtyuta-engineering/library/lib/db/typeorm/data-source';

@Injectable()
export class ArticleService {
  async getArticles() {
    const articles = (await new FetchAllArticles(AppDataSource).fetch())
      .articles;
    return articles;
  }

  async registerArticle(params: RegisterArticleDto) {
    const article = await new RegisterArticle(AppDataSource).register(params);
    return article.article;
  }

  async deleteAllArticle() {
    const deleteResult = await new DeleteAllArticle(AppDataSource).execute();
    return deleteResult.deleteResult;
  }
}

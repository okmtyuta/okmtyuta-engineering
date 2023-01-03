import { Injectable } from '@nestjs/common';
import { FetchAllArticles } from '@okmtyuta-engineering/infrastructure/lib/query/monopoly/okmtyuta-engineering/article/FetchAllArticles';
import { FetchArticleById } from '@okmtyuta-engineering/infrastructure/lib/query/monopoly/okmtyuta-engineering/article/FetchArticleById';
import { CreateArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/CreateArticle.dto';
import { CreateArticle } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/CreateArticle';
import { DeleteAllArticle } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/DeleteAllArticles';
import { AppDataSource } from 'src/db/data-source';

@Injectable()
export class ArticleService {
  async getArticles() {
    const articles = await new FetchAllArticles(AppDataSource).execute();
    return articles;
  }

  async getArticleById(articleId) {
    const article = await new FetchArticleById(AppDataSource).execute({
      articleId: articleId,
    });
    return article;
  }

  async createArticle(params: CreateArticleDto) {
    const article = await new CreateArticle(AppDataSource).execute(params);
    return article;
  }

  async deleteAllArticle() {
    const deleteResult = await new DeleteAllArticle(AppDataSource).execute();
    return deleteResult;
  }
}

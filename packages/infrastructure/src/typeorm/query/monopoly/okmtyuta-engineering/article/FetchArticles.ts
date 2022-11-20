import { Article } from '@okmtyuta-engineering/library/lib/entity/Article'
import { AppDataSource } from '../../../../config/data-source'

interface FetchArticlesResult {
  articles: Article[]
}

interface IFetchArticles {
  fetch(): Promise<FetchArticlesResult>
}

export class FetchArticles implements IFetchArticles {
  async fetch(): Promise<FetchArticlesResult> {
    const dataSource = await AppDataSource.initialize()
    try {
      const articleRepository = await dataSource.getRepository(Article);
      const articles = await articleRepository.find();

      return {
        articles: articles,
      }
    } catch (error) {
    } finally {
      await dataSource.destroy()
    }
  }
}

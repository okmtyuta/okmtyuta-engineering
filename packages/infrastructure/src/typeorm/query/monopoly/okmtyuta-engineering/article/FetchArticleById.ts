import { Article } from '@okmtyuta-engineering/library/lib/entity/Article'
import { AppDataSource } from '../../../../config/data-source'
import { FetchArticleByIdDto } from './dto/FetchArticleById.dto'

interface FetchArticleByIdResult {
  article: Article
}

interface IFetchArticleById {
  fetch(params: FetchArticleByIdDto): Promise<FetchArticleByIdResult>
}

export class FetchArticleById implements IFetchArticleById {
  async fetch(params: FetchArticleByIdDto): Promise<FetchArticleByIdResult> {
    const dataSource = await AppDataSource.initialize()
    try {
      const articleRepository = await dataSource.getRepository(Article);
      const article = await articleRepository.findOne({
        where: {
          articleId: params.articleId
        }
      });

      if (!article) {
        throw Error(`NOT FOUND ARTICLE BY ID ${params.articleId}`)
      }

      return {
        article: article,
      }
    } catch (error) {
      return error;
    } finally {
      await dataSource.destroy()
    }
  }
}

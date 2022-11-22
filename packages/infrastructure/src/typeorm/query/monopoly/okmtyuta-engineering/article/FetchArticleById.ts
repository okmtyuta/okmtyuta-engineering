import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { DataSource } from 'typeorm'
import { FetchArticleByIdDto } from './dto/FetchArticleById.dto'

interface FetchArticleByIdResult {
  article: Article
}

interface IFetchArticleById {
  fetch(params: FetchArticleByIdDto): Promise<FetchArticleByIdResult>
}

export class FetchArticleById implements IFetchArticleById {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async fetch(params: FetchArticleByIdDto): Promise<FetchArticleByIdResult> {
    await this.dataSource.initialize()
    try {
      const articleRepository = await this.dataSource.getRepository(Article)
      const article = await articleRepository.findOne({
        where: {
          articleId: params.articleId,
        },
      })

      if (!article) {
        throw Error(`NOT FOUND ARTICLE BY ID ${params.articleId}`)
      }

      return {
        article: article,
      }
    } catch (error) {
      console.log(error)
      new Error(error)
    } finally {
      await this.dataSource.destroy()
    }
  }
}

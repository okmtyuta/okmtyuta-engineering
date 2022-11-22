import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { DataSource, DeleteResult } from 'typeorm'

interface DeleteAllArticleResult {
  deleteResult: DeleteResult
}

interface IDeleteAllArticle {
  execute(): Promise<DeleteAllArticleResult>
}

export class DeleteAllArticle implements IDeleteAllArticle {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async execute(): Promise<DeleteAllArticleResult> {
    await this.dataSource.initialize()

    try {
      const articleRepository = await this.dataSource.getRepository(Article)
      const deleteResult = await articleRepository.createQueryBuilder('article').delete().from(Article).execute()
      return {
        deleteResult: deleteResult,
      }
    } catch (error) {
      throw Error()
    } finally {
      await this.dataSource.destroy()
    }
  }
}

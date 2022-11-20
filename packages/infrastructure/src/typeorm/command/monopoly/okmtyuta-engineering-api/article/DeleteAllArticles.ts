import { Article } from '@okmtyuta-engineering/library/lib/entity/Article'
import { DeleteResult } from 'typeorm'
import { AppDataSource } from '../../../../config/data-source'

interface DeleteAllArticleResult {
  deleteResult: DeleteResult
}

interface IDeleteAllArticle {
  execute(): Promise<DeleteAllArticleResult>
}

export class DeleteAllArticle implements IDeleteAllArticle {
  async execute(): Promise<DeleteAllArticleResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const articleRepository = await dataSource.getRepository(Article);
      const deleteResult = await articleRepository.createQueryBuilder("article").delete().from(Article).execute();
      return {
        deleteResult: deleteResult
      }
    } catch (error) {
      throw Error()
    } finally {
      await dataSource.destroy()
    }
  }
}

import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { DeleteResult } from 'typeorm'
import { AppDataSource } from '../../../../config/data-source'
import { DeleteArticleByIdDto } from './dto/DeleteArticleById.dto'

interface DeleteArticleByIdResult {
  deleteResult: DeleteResult,
  articleId: string,
}

interface IDeleteArticleById {
  execute(params: DeleteArticleByIdDto): Promise<DeleteArticleByIdResult>
}

export class DeleteArticleById implements IDeleteArticleById {
  async execute(params: DeleteArticleByIdDto): Promise<DeleteArticleByIdResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const articleRepository = await dataSource.getRepository(Article);
      const deleteResult = await articleRepository.delete({
        articleId: params.articleId
      })

      return {
        deleteResult: deleteResult,
        articleId: params.articleId
      }
    } catch(error) {
      throw new Error()
    } finally {
      dataSource.destroy()
    }
  }
}

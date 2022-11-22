import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { DataSource, DeleteResult } from 'typeorm'
import { DeleteArticleByIdDto } from './dto/DeleteArticleById.dto'

interface DeleteArticleByIdResult {
  deleteResult: DeleteResult
  articleId: string
}

interface IDeleteArticleById {
  execute(params: DeleteArticleByIdDto): Promise<DeleteArticleByIdResult>
}

export class DeleteArticleById implements IDeleteArticleById {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }
  
  async execute(params: DeleteArticleByIdDto): Promise<DeleteArticleByIdResult> {
    await this.dataSource.initialize()

    try {
      const articleRepository = await this.dataSource.getRepository(Article)
      const deleteResult = await articleRepository.delete({
        articleId: params.articleId,
      })

      return {
        deleteResult: deleteResult,
        articleId: params.articleId,
      }
    } catch (error) {
      throw new Error()
    } finally {
      this.dataSource.destroy()
    }
  }
}

import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag'
import { DataSource, DeleteResult } from 'typeorm'

interface DeleteAllTagsResult {
  deleteResult: DeleteResult
}

interface IDeleteAllTags {
  execute(): Promise<DeleteAllTagsResult>
}

export class DeleteAllTags implements IDeleteAllTags {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async execute(): Promise<DeleteAllTagsResult> {
    await this.dataSource.initialize()

    try {
      const tagRepository = await this.dataSource.getRepository(Tag)
      const deleteResult = await tagRepository.createQueryBuilder('tag').delete().from(Tag).execute()
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

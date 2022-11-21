import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag'
import { DeleteResult } from 'typeorm'
import { AppDataSource } from '../../../../config/data-source'

interface DeleteAllTagsResult {
  deleteResult: DeleteResult
}

interface IDeleteAllTags {
  execute(): Promise<DeleteAllTagsResult>
}

export class DeleteAllTags implements IDeleteAllTags {
  async execute(): Promise<DeleteAllTagsResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const tagRepository = await dataSource.getRepository(Tag);
      const deleteResult = await tagRepository.createQueryBuilder("tag").delete().from(Tag).execute();
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

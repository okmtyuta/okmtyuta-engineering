import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag'
import { AppDataSource } from '../../../../config/data-source'

interface FetchAllTagsResult {
  tags: Tag[]
}

interface IFetchAllTags {
  execute(): Promise<FetchAllTagsResult>
}

export class FetchAllTags implements IFetchAllTags {
  async execute(): Promise<FetchAllTagsResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const tagRepository = await dataSource.getRepository(Tag)
      const tags = await tagRepository.find()

      return {
        tags: tags,
      }
    } catch (error) {
    } finally {
      await dataSource.destroy()
    }
  }
}

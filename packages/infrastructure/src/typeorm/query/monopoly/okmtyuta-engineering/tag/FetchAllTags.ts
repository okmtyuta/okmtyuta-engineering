import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag'
import { DataSource } from 'typeorm'

interface FetchAllTagsResult {
  tags: Tag[]
}

interface IFetchAllTags {
  execute(): Promise<FetchAllTagsResult>
}

export class FetchAllTags implements IFetchAllTags {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async execute(): Promise<FetchAllTagsResult> {
    await this.dataSource.initialize()

    try {
      const tagRepository = await this.dataSource.getRepository(Tag)
      const tags = await tagRepository.find()

      return {
        tags: tags,
      }
    } catch (error) {
    } finally {
      await this.dataSource.destroy()
    }
  }
}

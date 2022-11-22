import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag'
import { DataSource } from 'typeorm'
import { FetchTagByNameDto } from './dto/FetchTagByName.dto'

interface FetchTagByNameResult {
  tag: Tag
}

interface IFetchTagByName {
  fetch(params: FetchTagByNameDto): Promise<FetchTagByNameResult>
}

export class FetchTagByName implements IFetchTagByName {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async fetch(params: FetchTagByNameDto): Promise<FetchTagByNameResult> {
    await this.dataSource.initialize()

    try {
      const tagRepository = await this.dataSource.getRepository(Tag)
      const tag = await tagRepository.findOne({
        where: {
          name: params.name,
        },
      })

      return {
        tag: tag,
      }
    } catch (error) {
    } finally {
      await this.dataSource.destroy()
    }
  }
}

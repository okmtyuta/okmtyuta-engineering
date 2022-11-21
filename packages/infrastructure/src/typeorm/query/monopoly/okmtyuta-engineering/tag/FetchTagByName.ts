import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag'
import { AppDataSource } from '../../../../config/data-source'
import { FetchTagByNameDto } from './dto/FetchTagByName.dto'


interface FetchTagByNameResult {
  tag: Tag
}

interface IFetchTagByName {
  fetch(params: FetchTagByNameDto): Promise<FetchTagByNameResult>
}

export class FetchTagByName implements IFetchTagByName {
  async fetch(params: FetchTagByNameDto): Promise<FetchTagByNameResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const tagRepository = await dataSource.getRepository(Tag);
      const tag = await tagRepository.findOne({
        where: {
          name: params.name
        }
      });

      return {
        tag: tag,
      }
    } catch (error) {
    } finally {
      await dataSource.destroy()
    }
  }
}

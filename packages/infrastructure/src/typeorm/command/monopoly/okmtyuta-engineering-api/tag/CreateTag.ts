import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag'
import { DataSource } from 'typeorm'
import { CreateTagDto } from './dto/CreateTag.dto'

interface CreateTagResult {
  tag: Tag
}

interface ICreateTag {
  execute(params: CreateTagDto): Promise<CreateTagResult>
}

export class CreateTag implements ICreateTag {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }
  async execute(params: CreateTagDto): Promise<CreateTagResult> {
    await this.dataSource.initialize()

    try {
      const tagRepository = await this.dataSource.getRepository(Tag)

      const tag = tagRepository.create({
        name: params.name,
      })
      const createdTag = await tagRepository.save(tag)

      return {
        tag: createdTag,
      }
    } catch (error) {
      console.log(error)
      throw new Error(error)
    } finally {
      await this.dataSource.destroy()
    }
  }
}

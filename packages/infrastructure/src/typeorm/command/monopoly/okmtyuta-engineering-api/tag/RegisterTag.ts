import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag'
import { DataSource } from 'typeorm'
import { RegisterTagDto } from './dto/RegisterTag.dto'

interface RegisterTagResult {
  tag: Tag
}

interface IRegisterTag {
  execute(params: RegisterTagDto): Promise<RegisterTagResult>
}

export class RegisterTag implements IRegisterTag {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }
  async execute(params: RegisterTagDto): Promise<RegisterTagResult> {
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
      throw Error()
    } finally {
      await this.dataSource.destroy()
    }
  }
}

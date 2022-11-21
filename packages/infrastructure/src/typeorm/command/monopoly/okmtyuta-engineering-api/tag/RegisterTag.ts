
import { Tag } from "@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag";
import { AppDataSource } from "../../../../config/data-source";
import { RegisterTagDto } from "./dto/RegisterTag.dto";

interface RegisterTagResult {
  tag: Tag
}

interface IRegisterTag {
  execute(params: RegisterTagDto): Promise<RegisterTagResult>
}

export class RegisterTag implements IRegisterTag {
  async execute(params: RegisterTagDto): Promise<RegisterTagResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const tagRepository = await dataSource.getRepository(Tag)

      const tag = tagRepository.create({
        name: params.name
      })
      const createdTag = await tagRepository.save(tag)

      return {
        tag: createdTag,
      }
    } catch (error) {
      throw Error()
    } finally {
      await dataSource.destroy()
    }
  }
}

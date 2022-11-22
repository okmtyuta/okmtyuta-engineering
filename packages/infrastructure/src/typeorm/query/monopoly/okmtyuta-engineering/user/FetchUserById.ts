import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User'
import { DataSource } from 'typeorm'
import { FetchUserByIdDto } from './dto/FetchUserById.dto'

interface FetchUserByIdResult {
  user: User
}

interface IFetchUserById {
  execute(params: FetchUserByIdDto): Promise<FetchUserByIdResult>
}

export class FetchUserById implements IFetchUserById {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async execute(params: FetchUserByIdDto): Promise<FetchUserByIdResult> {
    await this.dataSource.initialize()

    try {
      const userRepository = await this.dataSource.getRepository(User)
      const user = await userRepository.findOne({
        where: {
          userId: params.userId,
        },
      })

      return {
        user: user,
      }
    } catch (error) {
    } finally {
      await this.dataSource.destroy()
    }
  }
}

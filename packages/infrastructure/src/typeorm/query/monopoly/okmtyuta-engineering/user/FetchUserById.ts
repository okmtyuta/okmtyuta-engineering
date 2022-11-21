import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User'
import { AppDataSource } from '../../../../config/data-source'
import { FetchUserByIdDto } from './dto/FetchUserById.dto'

interface FetchUserByIdResult {
  user: User
}

interface IFetchUserById {
  execute(params: FetchUserByIdDto): Promise<FetchUserByIdResult>
}

export class FetchUserById implements IFetchUserById {
  async execute(params: FetchUserByIdDto): Promise<FetchUserByIdResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const userRepository = await dataSource.getRepository(User)
      const user = await userRepository.findOne({
        where: {
          userId: params.userId
        }
      })

      return {
        user: user,
      }
    } catch (error) {
    } finally {
      await dataSource.destroy()
    }
  }
}

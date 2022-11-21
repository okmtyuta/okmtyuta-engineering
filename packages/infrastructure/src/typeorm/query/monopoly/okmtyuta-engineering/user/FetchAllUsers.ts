import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User'
import { AppDataSource } from '../../../../config/data-source'

interface FetchAllUsersResult {
  users: User[]
}

interface IFetchAllUsers {
  execute(): Promise<FetchAllUsersResult>
}

export class FetchAllUsers implements IFetchAllUsers {
  async execute(): Promise<FetchAllUsersResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const userRepository = await dataSource.getRepository(User)
      const users = await userRepository.find()

      return {
        users: users,
      }
    } catch (error) {
    } finally {
      await dataSource.destroy()
    }
  }
}

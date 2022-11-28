import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User'
import { DataSource } from 'typeorm'

interface FetchAllUsersResult {
  users: User[]
}

interface IFetchAllUsers {
  execute(): Promise<FetchAllUsersResult>
}

export class FetchAllUsers implements IFetchAllUsers {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }
  async execute(): Promise<FetchAllUsersResult> {
    await this.dataSource.initialize()

    try {
      const userRepository = await this.dataSource.getRepository(User)
      const users = await userRepository.find()

      return {
        users: users,
      }
    } catch (error) {
    } finally {
      await this.dataSource.destroy()
    }
  }
}

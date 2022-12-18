import { CreateUserDto } from './dto/CreateUserDto';
import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
import { DataSource } from 'typeorm';

interface CreateUserResult {
  user: User
}

interface ICreateUser {
  execute(params: CreateUserDto): Promise<CreateUserResult>
}

export class CreateUser implements ICreateUser {
  constructor(
    private dataSource: DataSource
  ) {
    this.dataSource = dataSource
  }
  async execute(params: CreateUserDto): Promise<CreateUserResult> {
    await this.dataSource.initialize()

    try {
      const userRepository = await this.dataSource.getRepository(User)

      const user = await userRepository.create({
        name: params.name
      })

      const createdUser = await userRepository.save(user)

      return {
        user: createdUser,
      }
    } catch (error) {
      throw Error()
    } finally {
      await this.dataSource.destroy()
    }
  }
}

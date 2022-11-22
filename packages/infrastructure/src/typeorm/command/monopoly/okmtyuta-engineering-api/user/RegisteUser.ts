import { RegisterUserDto } from './dto/RegisterUserDto';
import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
import { DataSource } from 'typeorm';

interface RegisterUserResult {
  user: User
}

interface IRegisterUser {
  execute(params: RegisterUserDto): Promise<RegisterUserResult>
}

export class RegisterUser implements IRegisterUser {
  constructor(
    private dataSource: DataSource
  ) {
    this.dataSource = dataSource
  }
  async execute(params: RegisterUserDto): Promise<RegisterUserResult> {
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

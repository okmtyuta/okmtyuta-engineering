import { RegisterUserDto } from './dto/RegisterUserDto';
import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
import { AppDataSource } from "../../../../config/data-source";

interface RegisterUserResult {
  user: User
}

interface IRegisterUser {
  execute(params: RegisterUserDto): Promise<RegisterUserResult>
}

export class RegisterUser implements IRegisterUser {
  async execute(params: RegisterUserDto): Promise<RegisterUserResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const userRepository = await dataSource.getRepository(User)

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
      await dataSource.destroy()
    }
  }
}

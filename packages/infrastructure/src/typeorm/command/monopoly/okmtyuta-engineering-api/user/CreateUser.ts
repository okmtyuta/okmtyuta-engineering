import { CreateUserDto } from './dto/CreateUserDto';
import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
import { DataSource } from 'typeorm';
import { create } from 'domain';

interface ICreateUser {
  execute(params: CreateUserDto): Promise<User>;
}

export class CreateUser implements ICreateUser {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  async execute(params: CreateUserDto): Promise<User> {
    await this.dataSource.initialize();

    try {
      const userRepository = await this.dataSource.getRepository(User);

      const user = await userRepository.create({
        name: params.name,
        mailAddress: params.mailAddress,
        password: params.password,
      });

      const createdUser = await userRepository.save(user);

      return createdUser;
    } catch (error) {
      throw Error();
    } finally {
      await this.dataSource.destroy();
    }
  }
}

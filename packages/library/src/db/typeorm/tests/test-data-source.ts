import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User, Tag, Article } from '../entity'

export const TestDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [Article, Tag, User],
  migrations: [__dirname + '/migrations/*.ts'],
  subscribers: [],
})

import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Article, Tag, User } from './entity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'okmtyuta',
  password: 's#kn18k0a0',
  database: 'okmtyuta',
  synchronize: true,
  logging: false,
  entities: [Article, Tag, User],
  migrations: [__dirname + "/migrations/*.ts"],
  subscribers: [],
})

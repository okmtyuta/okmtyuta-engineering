import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Article } from './entity/Article'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'okmtyuta',
  password: 's#kn18k0a0',
  database: 'okmtyuta',
  synchronize: true,
  logging: false,
  entities: [Article],
  migrations: ["db/typeorm/migrations/*.ts"],
  subscribers: [],
})

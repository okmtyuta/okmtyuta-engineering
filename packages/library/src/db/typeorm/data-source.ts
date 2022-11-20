import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'okmtyuta',
  password: 's#kn18k0a0',
  database: 'okmtyuta',
  synchronize: true,
  logging: false,
  entities: [__dirname + "/entity/*.ts"],
  migrations: [__dirname + "/migrations/*.ts"],
  subscribers: [],
})

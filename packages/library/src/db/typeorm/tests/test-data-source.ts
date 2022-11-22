import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const TestDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entity/*.ts'],
  migrations: [__dirname + '/tests/migrations/*.ts'],
  subscribers: [],
})

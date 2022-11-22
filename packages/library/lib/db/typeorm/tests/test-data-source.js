"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.TestDataSource = new typeorm_1.DataSource({
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
});
//# sourceMappingURL=test-data-source.js.map
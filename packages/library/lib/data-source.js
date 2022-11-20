"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
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
});
//# sourceMappingURL=data-source.js.map
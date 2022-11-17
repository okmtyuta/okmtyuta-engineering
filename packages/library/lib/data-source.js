"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Article_1 = require("./entity/Article");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'okmtyuta',
    password: 's#kn18k0a0',
    database: 'okmtyuta',
    synchronize: true,
    logging: false,
    entities: [Article_1.Article],
    migrations: ["db/typeorm/migrations/*.ts"],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map
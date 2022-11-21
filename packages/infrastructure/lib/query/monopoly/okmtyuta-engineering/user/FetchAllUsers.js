"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAllUsers = void 0;
const User_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/User");
const data_source_1 = require("../../../../config/data-source");
class FetchAllUsers {
    async execute() {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const userRepository = await dataSource.getRepository(User_1.User);
            const users = await userRepository.find();
            return {
                users: users,
            };
        }
        catch (error) {
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.FetchAllUsers = FetchAllUsers;
//# sourceMappingURL=FetchAllUsers.js.map
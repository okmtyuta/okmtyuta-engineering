"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAllUsers = void 0;
const User_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/User");
class FetchAllUsers {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async execute() {
        await this.dataSource.initialize();
        try {
            const userRepository = await this.dataSource.getRepository(User_1.User);
            const users = await userRepository.find();
            return {
                users: users,
            };
        }
        catch (error) {
        }
        finally {
            await this.dataSource.destroy();
        }
    }
}
exports.FetchAllUsers = FetchAllUsers;
//# sourceMappingURL=FetchAllUsers.js.map
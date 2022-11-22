"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchUserById = void 0;
const User_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/User");
class FetchUserById {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async execute(params) {
        await this.dataSource.initialize();
        try {
            const userRepository = await this.dataSource.getRepository(User_1.User);
            const user = await userRepository.findOne({
                where: {
                    userId: params.userId,
                },
            });
            return {
                user: user,
            };
        }
        catch (error) {
        }
        finally {
            await this.dataSource.destroy();
        }
    }
}
exports.FetchUserById = FetchUserById;
//# sourceMappingURL=FetchUserById.js.map
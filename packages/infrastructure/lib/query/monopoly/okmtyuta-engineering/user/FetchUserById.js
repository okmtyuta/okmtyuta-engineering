"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchUserById = void 0;
const User_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/User");
const data_source_1 = require("../../../../config/data-source");
class FetchUserById {
    async execute(params) {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const userRepository = await dataSource.getRepository(User_1.User);
            const user = await userRepository.findOne({
                where: {
                    userId: params.userId
                }
            });
            return {
                user: user,
            };
        }
        catch (error) {
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.FetchUserById = FetchUserById;
//# sourceMappingURL=FetchUserById.js.map
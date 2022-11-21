"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const User_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/User");
const data_source_1 = require("../../../../config/data-source");
class RegisterUser {
    async execute(params) {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const userRepository = await dataSource.getRepository(User_1.User);
            const user = await userRepository.create({
                name: params.name
            });
            const createdUser = await userRepository.save(user);
            return {
                user: createdUser,
            };
        }
        catch (error) {
            throw Error();
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.RegisterUser = RegisterUser;
//# sourceMappingURL=RegisteUser.js.map
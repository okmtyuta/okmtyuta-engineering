"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const User_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/User");
class RegisterUser {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async execute(params) {
        await this.dataSource.initialize();
        try {
            const userRepository = await this.dataSource.getRepository(User_1.User);
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
            await this.dataSource.destroy();
        }
    }
}
exports.RegisterUser = RegisterUser;
//# sourceMappingURL=RegisteUser.js.map
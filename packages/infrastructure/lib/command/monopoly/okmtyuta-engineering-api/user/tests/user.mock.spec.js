"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegisteUser_1 = require("../RegisteUser");
const data_source_1 = require("../../../../../config/data-source");
describe('RegisterUser', () => {
    let mockUser;
    beforeEach(async () => {
        mockUser = {
            name: 'okmtyuta',
        };
    });
    it('execute', async () => {
        const user = await new RegisteUser_1.RegisterUser(data_source_1.AppDataSource).execute(mockUser);
        console.log(user);
    });
});
//# sourceMappingURL=user.mock.spec.js.map
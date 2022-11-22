"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegisteUser_1 = require("../RegisteUser");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe('RegisterUser', () => {
    let mockUser;
    beforeEach(async () => {
        mockUser = {
            name: 'okmtyuta',
        };
    });
    it('execute', async () => {
        const user = await new RegisteUser_1.RegisterUser(test_data_source_1.TestDataSource).execute(mockUser);
        console.log(user);
    });
});
//# sourceMappingURL=user.mock.spec.js.map
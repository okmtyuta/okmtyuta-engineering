"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllUsers_1 = require("../FetchAllUsers");
const FetchUserById_1 = require("../FetchUserById");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe('Fetch User', () => {
    it('FetchAllUsers.execute', async () => {
        const users = await new FetchAllUsers_1.FetchAllUsers(test_data_source_1.TestDataSource).execute();
        console.log(users.users);
    });
    it('FetchUserById.execute', async () => {
        const user = await new FetchUserById_1.FetchUserById(test_data_source_1.TestDataSource).execute({ userId: '1' });
        console.log(user);
    });
});
//# sourceMappingURL=user.mock.spec.js.map
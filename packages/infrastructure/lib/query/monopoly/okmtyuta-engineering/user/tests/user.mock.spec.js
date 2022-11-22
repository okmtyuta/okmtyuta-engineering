"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllUsers_1 = require("../FetchAllUsers");
const FetchUserById_1 = require("../FetchUserById");
const data_source_1 = require("../../../../../config/data-source");
describe("Fetch User", () => {
    it("FetchAllUsers.execute", async () => {
        const users = await new FetchAllUsers_1.FetchAllUsers(data_source_1.AppDataSource).execute();
        console.log(users.users);
    });
    it("FetchUserById.execute", async () => {
        const user = await new FetchUserById_1.FetchUserById(data_source_1.AppDataSource).execute({ userId: "1" });
        console.log(user);
    });
});
//# sourceMappingURL=user.mock.spec.js.map
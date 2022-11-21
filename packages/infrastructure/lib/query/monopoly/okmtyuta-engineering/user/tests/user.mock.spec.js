"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllUsers_1 = require("../FetchAllUsers");
const FetchUserById_1 = require("../FetchUserById");
describe("Fetch User", () => {
    it("FetchAllUsers.execute", async () => {
        const users = await new FetchAllUsers_1.FetchAllUsers().execute();
        console.log(users.users);
    });
    it("FetchUserById.execute", async () => {
        const user = await new FetchUserById_1.FetchUserById().execute({ userId: "1" });
        console.log(user);
    });
});
//# sourceMappingURL=user.mock.spec.js.map
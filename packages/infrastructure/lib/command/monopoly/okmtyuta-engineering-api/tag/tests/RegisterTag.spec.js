"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterTag_1 = require("../RegisterTag");
describe("RegisterTag", () => {
    let mockTag;
    beforeEach(() => {
        mockTag = {
            name: String(new Date())
        };
    });
    it("execute", async () => {
        const tag = await new RegisterTag_1.RegisterTag().execute(mockTag);
        console.log(tag);
    });
});
//# sourceMappingURL=RegisterTag.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchTagByName_1 = require("../FetchTagByName");
describe("FetchTagByName", () => {
    it("execute", async () => {
        const tag = await new FetchTagByName_1.FetchTagByName().fetch({ name: "テストタグ" });
        console.log(tag);
    });
});
//# sourceMappingURL=FetchTagByName.spec.js.map
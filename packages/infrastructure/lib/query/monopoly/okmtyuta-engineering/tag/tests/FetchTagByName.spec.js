"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchTagByName_1 = require("../FetchTagByName");
const data_source_1 = require("../../../../../config/data-source");
describe("FetchTagByName", () => {
    it("execute", async () => {
        const tag = await new FetchTagByName_1.FetchTagByName(data_source_1.AppDataSource).fetch({ name: "テストタグ" });
        console.log(tag);
    });
});
//# sourceMappingURL=FetchTagByName.spec.js.map
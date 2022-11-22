"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllTags_1 = require("../FetchAllTags");
const data_source_1 = require("../../../../../config/data-source");
describe("FetchAllTags", () => {
    it("execute", async () => {
        const tags = await new FetchAllTags_1.FetchAllTags(data_source_1.AppDataSource).execute();
        console.log(tags.tags.length);
    });
});
//# sourceMappingURL=FetchAllTags.spec.js.map
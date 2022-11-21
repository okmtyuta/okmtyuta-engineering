"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllTags_1 = require("../FetchAllTags");
describe("FetchAllTags", () => {
    it("execute", async () => {
        const tags = await new FetchAllTags_1.FetchAllTags().execute();
        console.log(tags.tags.length);
    });
});
//# sourceMappingURL=FetchAllTags.spec.js.map
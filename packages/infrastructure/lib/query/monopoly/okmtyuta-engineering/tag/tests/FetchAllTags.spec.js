"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllTags_1 = require("../FetchAllTags");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe('FetchAllTags', () => {
    it('execute', async () => {
        const tags = await new FetchAllTags_1.FetchAllTags(test_data_source_1.TestDataSource).execute();
        console.log(tags.tags.length);
    });
});
//# sourceMappingURL=FetchAllTags.spec.js.map
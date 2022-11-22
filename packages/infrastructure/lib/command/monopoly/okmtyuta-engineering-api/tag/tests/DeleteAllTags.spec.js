"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteAllTags_1 = require("../DeleteAllTags");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe('DeleteAllTags', () => {
    it('execute', async () => {
        const deleteResult = await new DeleteAllTags_1.DeleteAllTags(test_data_source_1.TestDataSource).execute();
        console.log(deleteResult);
    });
});
//# sourceMappingURL=DeleteAllTags.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchTagByName_1 = require("../FetchTagByName");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe('FetchTagByName', () => {
    it('execute', async () => {
        const tag = await new FetchTagByName_1.FetchTagByName(test_data_source_1.TestDataSource).fetch({ name: 'テストタグ' });
        console.log(tag);
    });
});
//# sourceMappingURL=FetchTagByName.spec.js.map
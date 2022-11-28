"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterTag_1 = require("../RegisterTag");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe('RegisterTag', () => {
    let mockTag;
    beforeEach(() => {
        mockTag = {
            name: String(new Date()),
        };
    });
    it('execute', async () => {
        const tags = [];
        for (let i = 0; i < 10; i++) {
            const tag = await new RegisterTag_1.RegisterTag(test_data_source_1.TestDataSource).execute({
                name: `test-${i}番目`,
            });
            tags.push(tag);
        }
        console.log(tags);
    });
});
//# sourceMappingURL=RegisterTag.spec.js.map
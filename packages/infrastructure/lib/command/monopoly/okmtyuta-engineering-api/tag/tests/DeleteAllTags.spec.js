"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteAllTags_1 = require("../DeleteAllTags");
const data_source_1 = require("../../../../../config/data-source");
describe('DeleteAllTags', () => {
    it('execute', async () => {
        const deleteResult = await new DeleteAllTags_1.DeleteAllTags(data_source_1.AppDataSource).execute();
        console.log(deleteResult);
    });
});
//# sourceMappingURL=DeleteAllTags.spec.js.map
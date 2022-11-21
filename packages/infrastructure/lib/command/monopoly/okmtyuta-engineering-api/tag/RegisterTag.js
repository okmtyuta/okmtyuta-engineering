"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterTag = void 0;
const Tag_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag");
const data_source_1 = require("../../../../config/data-source");
class RegisterTag {
    async execute(params) {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const tagRepository = await dataSource.getRepository(Tag_1.Tag);
            const tag = tagRepository.create({
                name: params.name
            });
            const createdTag = await tagRepository.save(tag);
            return {
                tag: createdTag,
            };
        }
        catch (error) {
            throw Error();
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.RegisterTag = RegisterTag;
//# sourceMappingURL=RegisterTag.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterTag = void 0;
const Tag_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag");
class RegisterTag {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async execute(params) {
        await this.dataSource.initialize();
        try {
            const tagRepository = await this.dataSource.getRepository(Tag_1.Tag);
            const tag = tagRepository.create({
                name: params.name,
            });
            const createdTag = await tagRepository.save(tag);
            return {
                tag: createdTag,
            };
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
        finally {
            await this.dataSource.destroy();
        }
    }
}
exports.RegisterTag = RegisterTag;
//# sourceMappingURL=RegisterTag.js.map
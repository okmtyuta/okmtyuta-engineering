"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const typeorm_1 = require("typeorm");
const Tag_1 = require("./Tag");
const User_1 = require("./User");
let Article = class Article {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'smallint',
        comment: '記事のID',
    }),
    __metadata("design:type", String)
], Article.prototype, "articleId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        comment: '記事のタイトル',
    }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        comment: '記事の内容',
    }),
    __metadata("design:type", String)
], Article.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        comment: '記事の概要',
    }),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        comment: '記事の投稿日',
    }),
    __metadata("design:type", Date)
], Article.prototype, "postedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        comment: '記事の更新日',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Article.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        array: true,
        comment: '記事の参考文献',
        nullable: true,
    }),
    __metadata("design:type", Array)
], Article.prototype, "references", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        comment: '記事の公開設定',
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], Article.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        comment: '記事のピックアップ設定',
    }),
    __metadata("design:type", Boolean)
], Article.prototype, "isPickedUp", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        comment: '記事のサムネイルへのパス',
        nullable: true,
    }),
    __metadata("design:type", String)
], Article.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Tag_1.Tag, (tag) => tag.articles, {
        onDelete: "CASCADE",
        nullable: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Article.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.articles, {
        onDelete: "CASCADE",
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", User_1.User)
], Article.prototype, "user", void 0);
Article = __decorate([
    (0, typeorm_1.Entity)()
], Article);
exports.Article = Article;
//# sourceMappingURL=Article.js.map
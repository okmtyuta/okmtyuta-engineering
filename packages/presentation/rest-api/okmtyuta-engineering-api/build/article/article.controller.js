var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { RegisterArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/RegisterArticle.dto';
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async getAllArticle() {
        const articles = this.articleService.getArticles();
        return articles;
    }
    async registerArticle(params) {
        const article = this.articleService.registerArticle(params);
        return article;
    }
    async deleteAllArticle() {
        const deleteResult = this.articleService.deleteAllArticle();
        return deleteResult;
    }
};
__decorate([
    Get('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getAllArticle", null);
__decorate([
    Post('register'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof RegisterArticleDto !== "undefined" && RegisterArticleDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "registerArticle", null);
__decorate([
    Get('deleteAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteAllArticle", null);
ArticleController = __decorate([
    Controller('article'),
    __metadata("design:paramtypes", [ArticleService])
], ArticleController);
export { ArticleController };
//# sourceMappingURL=article.controller.js.map
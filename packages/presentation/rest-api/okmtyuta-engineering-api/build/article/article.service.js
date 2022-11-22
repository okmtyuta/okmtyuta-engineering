var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { FetchAllArticles } from '@okmtyuta-engineering/infrastructure/lib/query/monopoly/okmtyuta-engineering/article/FetchAllArticles';
import { RegisterArticle } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/RegisterArticle';
import { DeleteAllArticle } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/DeleteAllArticles';
let ArticleService = class ArticleService {
    async getArticles() {
        const articles = (await new FetchAllArticles().fetch()).articles;
        return articles;
    }
    async registerArticle(params) {
        const article = await new RegisterArticle().register(params);
        return article.article;
    }
    async deleteAllArticle() {
        const deleteResult = await new DeleteAllArticle().execute();
        return deleteResult.deleteResult;
    }
};
ArticleService = __decorate([
    Injectable()
], ArticleService);
export { ArticleService };
//# sourceMappingURL=article.service.js.map
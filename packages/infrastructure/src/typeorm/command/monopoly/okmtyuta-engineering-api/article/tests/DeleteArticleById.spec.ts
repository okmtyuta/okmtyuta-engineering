import { DeleteArticleById } from "../DeleteArticleById";
import { RegisterArticle } from "../RegisterArticle";

describe("DeleteArticleById", () => {
  let mockArticle;
  let targetArticleId;

  beforeEach(async () => {
    mockArticle = {
      title: "テスト記事",
      content: "テストコンテント",
      description: "これはテスト記事です",
      references: null,
      isPublic: true,
      thumbnail: null
    }

    const article = (await new RegisterArticle().register(mockArticle)).article
    console.log("Registered");
    console.log(article)

    targetArticleId = article.articleId
  })

  it("execute", async () => {
    const deleteResult = await new DeleteArticleById().execute({articleId: targetArticleId});
    console.log(deleteResult.articleId);
  })
})
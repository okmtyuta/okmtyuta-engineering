import { RegisterArticle } from "../RegisterArticle";

describe("RegisterArticle", () => {
  let mockArticle;

  beforeEach(() => {
    mockArticle = {
      title: "テスト記事",
      content: "テストコンテント",
      description: "これはテスト記事です",
      references: null,
      isPublic: true,
      thumbnail: null
    }
  })

  it("register", async () => {
    const article = (await new RegisterArticle().register(mockArticle));
    console.log(article);
  })
})

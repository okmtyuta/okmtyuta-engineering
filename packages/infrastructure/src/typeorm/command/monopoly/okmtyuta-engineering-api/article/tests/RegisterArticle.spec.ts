import { FetchUserById } from "src/typeorm/query/monopoly/okmtyuta-engineering/user/FetchUserById";
import { RegisterArticle } from "../RegisterArticle";

describe("RegisterArticle", () => {
  let mockArticle;

  beforeEach(async () => {
    const user = (await new FetchUserById().execute({userId: "1"})).user

    mockArticle = {
      title: "テスト記事",
      content: "テストコンテント",
      description: "これはテスト記事です",
      references: null,
      isPublic: true,
      thumbnail: null,
      tags: [],
      user: user,
    }
  })

  it("register", async () => {
    const article = (await new RegisterArticle().register(mockArticle));
    console.log(article);
  })
})

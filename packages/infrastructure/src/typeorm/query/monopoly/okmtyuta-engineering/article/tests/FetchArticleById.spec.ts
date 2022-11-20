import { FetchArticleById } from "../FetchArticleById";

describe("FetchArticleById", () => {
  it("fetch", async () => {
    const article = await new FetchArticleById().fetch({articleId: "8"});

    console.log(article);
  })
})
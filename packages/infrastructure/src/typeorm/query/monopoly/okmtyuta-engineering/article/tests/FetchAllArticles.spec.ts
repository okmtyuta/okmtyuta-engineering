import { FetchAllArticles } from "../FetchAllArticles"

describe("FetchArticles", () => {
  it("fetch", async () => {
    const articles = await new FetchAllArticles().fetch();
    console.log(articles.articles);
  })
})
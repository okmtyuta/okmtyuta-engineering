import { FetchArticles } from "../FetchArticles"

describe("FetchArticles", () => {
  it("fetch", async () => {
    const articles = await new FetchArticles().fetch();

    console.log(articles);
  })
})
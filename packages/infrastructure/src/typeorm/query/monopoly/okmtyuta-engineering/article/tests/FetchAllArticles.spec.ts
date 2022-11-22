import { FetchAllArticles } from "../FetchAllArticles"
import { AppDataSource } from '../../../../../config/data-source'

describe("FetchArticles", () => {
  it("fetch", async () => {
    const articles = await new FetchAllArticles(AppDataSource).fetch();
    console.log(articles.articles);
  })
})
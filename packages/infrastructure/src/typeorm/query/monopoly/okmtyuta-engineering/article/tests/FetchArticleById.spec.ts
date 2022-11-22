import { FetchArticleById } from "../FetchArticleById";
import { AppDataSource } from '../../../../../config/data-source'

describe("FetchArticleById", () => {
  it("fetch", async () => {
    const article = await new FetchArticleById(AppDataSource).fetch({articleId: "8"});

    console.log(article);
  })
})
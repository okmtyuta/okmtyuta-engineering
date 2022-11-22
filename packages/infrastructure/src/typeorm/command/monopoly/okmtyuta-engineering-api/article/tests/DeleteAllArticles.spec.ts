import { DeleteAllArticle } from "../DeleteAllArticles"
import { AppDataSource } from '../../../../../config/data-source'

describe("DeleteAllArticles", () => {
  it("deleteAll", async () => {
    const deleteResult = await new DeleteAllArticle(AppDataSource).execute();

    console.log(deleteResult)
  })
})
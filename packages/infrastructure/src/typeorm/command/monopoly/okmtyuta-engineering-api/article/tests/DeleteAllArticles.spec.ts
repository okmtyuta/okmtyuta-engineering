import { DeleteAllArticle } from "../DeleteAllArticles"
import { TestDataSource } from "../../../../../tests/test-data-source"

describe("DeleteAllArticles", () => {
  it("deleteAll", async () => {
    const deleteResult = await new DeleteAllArticle(TestDataSource).execute();

    console.log(deleteResult)
  })
})
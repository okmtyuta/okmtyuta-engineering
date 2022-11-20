import { DeleteAllArticle } from "../DeleteAllArticles"

describe("DeleteAllArticles", () => {
  it("deleteAll", async () => {
    const deleteResult = await new DeleteAllArticle().execute();

    console.log(deleteResult)
  })
})
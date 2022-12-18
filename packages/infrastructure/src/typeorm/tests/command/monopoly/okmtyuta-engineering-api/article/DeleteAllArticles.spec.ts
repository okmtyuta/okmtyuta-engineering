import { DeleteAllArticle } from "src/typeorm/command/monopoly/okmtyuta-engineering-api/article/DeleteAllArticles";
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe("DeleteAllArticles", () => {
  it("deleteAll", async () => {
    const deleteResult = await new DeleteAllArticle(TestDataSource).execute();

    expect(deleteResult).toBeDefined()
  })
})
import { FetchAllTags } from "../FetchAllTags"
import { AppDataSource } from '../../../../../config/data-source'

describe("FetchAllTags", () => {
  it("execute", async () => {
    const tags = await new FetchAllTags(AppDataSource).execute()
    console.log(tags.tags.length)
  })
})
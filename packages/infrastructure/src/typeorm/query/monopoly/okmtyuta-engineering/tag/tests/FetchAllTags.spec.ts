import { FetchAllTags } from "../FetchAllTags"

describe("FetchAllTags", () => {
  it("execute", async () => {
    const tags = await new FetchAllTags().execute()
    console.log(tags.tags.length)
  })
})
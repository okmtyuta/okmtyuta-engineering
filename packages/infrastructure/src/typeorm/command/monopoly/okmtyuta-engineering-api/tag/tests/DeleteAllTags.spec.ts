import { DeleteAllTags } from "../DeleteAllTags"

describe("DeleteAllTags", () => {
  it("execute", async () => {
    const deleteResult = await new DeleteAllTags().execute();

    console.log(deleteResult)
  })
})
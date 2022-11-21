import { FetchTagByName } from "../FetchTagByName"

describe("FetchTagByName", () => {
  it("execute", async () => {
    const tag = await new FetchTagByName().fetch({name: "テストタグ"})
    console.log(tag)
  })
})
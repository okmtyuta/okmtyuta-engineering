import { FetchTagByName } from "../FetchTagByName"
import { AppDataSource } from '../../../../../config/data-source'

describe("FetchTagByName", () => {
  it("execute", async () => {
    const tag = await new FetchTagByName(AppDataSource).fetch({name: "テストタグ"})
    console.log(tag)
  })
})
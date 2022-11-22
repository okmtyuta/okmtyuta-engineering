import { RegisterTag } from "../RegisterTag";
import { AppDataSource } from "../../../../../config/data-source";

describe("RegisterTag", () => {
  let mockTag;
  beforeEach(() => {
    mockTag = {
      name: String(new Date())
    }
  })
  it("execute", async () => {
    const tag = await new RegisterTag(AppDataSource).execute(mockTag);
    console.log(tag)
  })
})
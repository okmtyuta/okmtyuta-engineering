import { RegisterTag } from "../RegisterTag";

describe("RegisterTag", () => {
  let mockTag;
  beforeEach(() => {
    mockTag = {
      name: String(new Date())
    }
  })
  it("execute", async () => {
    const tag = await new RegisterTag().execute(mockTag);
    console.log(tag)
  })
})
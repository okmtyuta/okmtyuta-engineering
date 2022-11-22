import { RegisterTag } from "../RegisterTag";
import { TestDataSource } from "../../../../../tests/test-data-source";

describe("RegisterTag", () => {
  let mockTag;
  beforeEach(() => {
    mockTag = {
      name: String(new Date())
    }
  })
  it("execute", async () => {
    const tag = await new RegisterTag(TestDataSource).execute(mockTag);
    console.log(tag)
  })
})
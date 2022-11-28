import { RegisterTag } from '../RegisterTag'
import { TestDataSource } from '../../../../../tests/test-data-source'

describe('RegisterTag', () => {
  let mockTag
  beforeEach(() => {
    mockTag = {
      name: String(new Date()),
    }
  })
  it('execute', async () => {
    const tags = []
    for (let i = 0; i < 10; i++) {
      const tag = await new RegisterTag(TestDataSource).execute({
        name: `test-${i}番目`,
      })
      tags.push(tag)
    }
    console.log(tags)
  })
})
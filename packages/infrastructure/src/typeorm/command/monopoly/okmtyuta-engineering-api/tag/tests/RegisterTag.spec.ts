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
        name: `3-${i}番目`,
      })
      tags.push(tag)
    }
    console.log(tags)
  })
})

// { tag: Tag { name: '1-0番目', tagId: 12 } },
// { tag: Tag { name: '1-1番目', tagId: 13 } },
// { tag: Tag { name: '1-2番目', tagId: 14 } },
// { tag: Tag { name: '1-3番目', tagId: 15 } },
// { tag: Tag { name: '1-4番目', tagId: 16 } },
// { tag: Tag { name: '1-5番目', tagId: 17 } },
// { tag: Tag { name: '1-6番目', tagId: 18 } },
// { tag: Tag { name: '1-7番目', tagId: 19 } },
// { tag: Tag { name: '1-8番目', tagId: 20 } },
// { tag: Tag { name: '1-9番目', tagId: 21 } },
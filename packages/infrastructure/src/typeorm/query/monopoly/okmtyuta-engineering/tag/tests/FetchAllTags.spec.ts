import { FetchAllTags } from '../FetchAllTags'
import { TestDataSource } from '../../../../../tests/test-data-source'

describe('FetchAllTags', () => {
  it('execute', async () => {
    const tags = await new FetchAllTags(TestDataSource).execute()
    console.log(tags.tags)
  })
})

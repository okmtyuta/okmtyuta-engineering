import { FetchAllTags } from 'src/typeorm/query/monopoly/okmtyuta-engineering/tag/FetchAllTags'
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe('FetchAllTags', () => {
  it('execute', async () => {
    const tags = await new FetchAllTags(TestDataSource).execute()
    console.log(tags.tags)
  })
})

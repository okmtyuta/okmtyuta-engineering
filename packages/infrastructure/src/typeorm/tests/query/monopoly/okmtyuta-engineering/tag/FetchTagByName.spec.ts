import { FetchTagByName } from 'src/typeorm/query/monopoly/okmtyuta-engineering/tag/FetchTagByName'
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe('FetchTagByName', () => {
  it('execute', async () => {
    const tag = await new FetchTagByName(TestDataSource).fetch({ name: 'テストタグ' })
    console.log(tag)
  })
})

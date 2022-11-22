import { FetchTagByName } from '../FetchTagByName'
import { TestDataSource } from '../../../../../tests/test-data-source'

describe('FetchTagByName', () => {
  it('execute', async () => {
    const tag = await new FetchTagByName(TestDataSource).fetch({ name: 'テストタグ' })
    console.log(tag)
  })
})

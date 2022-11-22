import { DeleteAllTags } from '../DeleteAllTags'
import { TestDataSource } from '../../../../../tests/test-data-source'

describe('DeleteAllTags', () => {
  it('execute', async () => {
    const deleteResult = await new DeleteAllTags(TestDataSource).execute()

    console.log(deleteResult)
  })
})

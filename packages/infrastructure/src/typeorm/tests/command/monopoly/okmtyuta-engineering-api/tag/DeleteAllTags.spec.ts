import { DeleteAllTags } from 'src/typeorm/command/monopoly/okmtyuta-engineering-api/tag/DeleteAllTags'
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe('DeleteAllTags', () => {
  it('execute', async () => {
    const deleteResult = await new DeleteAllTags(TestDataSource).execute()

    console.log(deleteResult)
  })
})

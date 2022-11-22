import { DeleteAllTags } from '../DeleteAllTags'
import { AppDataSource } from '../../../../../config/data-source'

describe('DeleteAllTags', () => {
  it('execute', async () => {
    const deleteResult = await new DeleteAllTags(AppDataSource).execute()

    console.log(deleteResult)
  })
})

import { FetchAllUsers } from '../FetchAllUsers'
import { FetchUserById } from '../FetchUserById'
import { TestDataSource } from '../../../../../tests/test-data-source'

describe('Fetch User', () => {
  it('FetchAllUsers.execute', async () => {
    const users = await new FetchAllUsers(TestDataSource).execute()
    console.log(users.users)
  })

  it('FetchUserById.execute', async () => {
    const user = await new FetchUserById(TestDataSource).execute({ userId: '1' })
    console.log(user)
  })
})

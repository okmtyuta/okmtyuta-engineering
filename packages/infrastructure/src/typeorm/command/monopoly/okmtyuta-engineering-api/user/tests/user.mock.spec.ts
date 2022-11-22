import { RegisterUser } from '../RegisteUser'
import { TestDataSource } from '../../../../../tests/test-data-source'

describe('RegisterUser', () => {
  let mockUser

  beforeEach(async () => {
    mockUser = {
      name: 'okmtyuta',
    }
  })

  it('execute', async () => {
    const user = await new RegisterUser(TestDataSource).execute(mockUser)
    console.log(user)
  })
})

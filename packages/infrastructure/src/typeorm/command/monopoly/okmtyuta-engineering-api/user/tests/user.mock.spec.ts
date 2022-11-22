import { RegisterUser } from '../RegisteUser'
import { AppDataSource } from '../../../../../config/data-source'

describe('RegisterUser', () => {
  let mockUser

  beforeEach(async () => {
    mockUser = {
      name: 'okmtyuta',
    }
  })

  it('execute', async () => {
    const user = await new RegisterUser(AppDataSource).execute(mockUser)
    console.log(user)
  })
})

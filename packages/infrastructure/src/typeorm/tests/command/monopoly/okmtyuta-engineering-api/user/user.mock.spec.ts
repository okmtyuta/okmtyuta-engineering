import { CreateUser } from 'src/typeorm/command/monopoly/okmtyuta-engineering-api/user/CreateUser'
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe('CreateUser', () => {
  let mockUser

  beforeEach(async () => {
    mockUser = {
      name: 'okmtyuta',
    }
  })

  it('execute', async () => {
    const user = await new CreateUser(TestDataSource).execute(mockUser)
    console.log(user)
  })
})

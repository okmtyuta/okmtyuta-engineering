import { FetchAllUsers } from 'src/typeorm/query/monopoly/okmtyuta-engineering/user/FetchAllUsers';
import { FetchUserById } from 'src/typeorm/query/monopoly/okmtyuta-engineering/user/FetchUserById';
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe('Fetch User', () => {
  it('FetchAllUsers.execute', async () => {
    const users = await new FetchAllUsers(TestDataSource).execute();
    console.log(users.users);
  });

  it('FetchUserById.execute', async () => {
    const user = await new FetchUserById(TestDataSource).execute({
      userId: '1',
    });
    console.log(user);
  });
});

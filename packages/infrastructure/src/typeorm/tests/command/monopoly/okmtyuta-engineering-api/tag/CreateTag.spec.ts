import { CreateTag } from 'src/typeorm/command/monopoly/okmtyuta-engineering-api/tag/CreateTag';
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe('CreateTag', () => {
  let mockTag;
  beforeEach(() => {
    mockTag = {
      name: String(new Date()),
    };
  });
  it('execute', async () => {
    const tags = [];
    for (let i = 0; i < 10; i++) {
      const tag = await new CreateTag(TestDataSource).execute({
        name: `test-${i}番目`,
      });
      tags.push(tag);
    }
    console.log(tags);
  });
});

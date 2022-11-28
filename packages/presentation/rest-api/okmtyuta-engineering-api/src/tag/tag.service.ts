import { Injectable } from '@nestjs/common';
import { FetchAllTags } from '@okmtyuta-engineering/infrastructure/lib/query/monopoly/okmtyuta-engineering/tag/FetchAllTags';
import { AppDataSource } from '@okmtyuta-engineering/library/lib/db/typeorm/data-source';

@Injectable()
export class TagService {
  async getAllTags() {
    const tags = (await new FetchAllTags(AppDataSource).execute()).tags;
    return tags;
  }
}

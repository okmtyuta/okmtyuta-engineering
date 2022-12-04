import { Injectable } from '@nestjs/common';
import { FetchAllTags } from '@okmtyuta-engineering/infrastructure/lib/query/monopoly/okmtyuta-engineering/tag/FetchAllTags';
import { AppDataSource } from 'src/db/data-source';

@Injectable()
export class TagService {
  async getAllTags() {
    const tags = (await new FetchAllTags(AppDataSource).execute()).tags;
    return tags;
  }
}

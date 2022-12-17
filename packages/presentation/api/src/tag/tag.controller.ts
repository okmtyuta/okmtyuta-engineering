import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get('list')
  async getAllTags() {
    const tags = await this.tagService.getAllTags();
    return tags;
  }
}

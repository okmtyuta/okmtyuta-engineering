import { Controller, Get } from '@nestjs/common';

@Controller('')
export class IndexController {
  @Get('')
  async getIndex() {
    return 'this is index';
  }
}

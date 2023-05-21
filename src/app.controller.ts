import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return `Welcome to my Movie API`;
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('hello/:term')
  public sampleRoute(@Param('term') term: string): string {
    return `Hello, ${term}. How are You?`;
  }
}

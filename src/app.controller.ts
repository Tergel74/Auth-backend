import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('users')
  getData(): string {
    return this.appService.getData();
  }
  
  @Get('hello/:term')
  public sampleRoute(@Param('term') term: string): string {
    return `Hello, ${term}`;
  }
}

import { Injectable } from '@nestjs/common';
import data from '../../data.json';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  };
  getData(): string {
    // console.log(data);
    // console.log('sdfs')
    return 'Success!';
  }
}


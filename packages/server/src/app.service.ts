import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greetings = 'Hello World!';

  getHello(): string {
    return this.greetings;
  }
}

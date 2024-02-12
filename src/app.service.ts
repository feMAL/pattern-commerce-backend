import { Injectable } from '@nestjs/common';
import { ErrorManager } from './common/services/error.manager';
import { HelperService } from './utils/services/helper.service';

@Injectable()
export class AppService {

  constructor(
    private helperService: HelperService
  ){}

  async getHello(): Promise<string> {
    await this.helperService.setCacheValuesExamples();
    return 'Hello World!';
  }

  async getHelloError(): Promise<any> {
    try{
      throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Hello Error', context: 'AppService' });
    }catch(err){
      ErrorManager.dispatchError(err.message);
    }
  }
  
}

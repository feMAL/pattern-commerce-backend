import {
    Injectable,
    CanActivate,
    ExecutionContext,
    HttpException,
  } from '@nestjs/common';
  import { ConfigService } from '@nestjs/config';
  import { Request } from 'express';
  import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
  
  @Injectable()
  export class AccessValidationGuard implements CanActivate {
    constructor(
      private readonly configService: ConfigService,
      private readonly httpClient: HttpService,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {

      const request: Request = context.switchToHttp().getRequest();
      const allowedAccess = await this.validation(request);
  
      /* istanbul ignore next */
      if (allowedAccess?.status === 200) {
        return true;
      }
    }
  
    async validation({ headers }: Request): Promise<any> {
      try {
        const { acvUrl } =
          this.configService.get('services');
        const authorization = headers['authorization'];

          
        /* istanbul ignore next */
        
        const res = await fetch(`${acvUrl}/auth/validate`,{
          headers: {
            authorization
          }
        })
        return res;

        /* istanbul ignore next */
      } catch (error) {
        /* istanbul ignore next */
        throw new HttpException({ errors: error.response.data.errors }, error.response.status);
      }
    }
  }
  
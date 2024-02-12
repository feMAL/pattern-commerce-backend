import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CryptService } from './services/crypt.service';
import { HelperService } from './services/helper.service';
import Config from '../config/app/configuration';
import { CacheService } from './services/cache.service';

@Module({
    imports: [
        JwtModule.register({
          secret: Config().jwtSecret,
          signOptions: {expiresIn: Config().jwtExp}
        }),
    ],
    providers: [
        CryptService,
        HelperService,
        JwtService,
        CacheService
    ],
    exports: [
        CryptService,
        HelperService,
        CacheService
    ]
})
export class UtilsModule {}

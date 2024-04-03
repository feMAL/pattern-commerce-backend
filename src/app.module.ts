import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config/configuration.module';

import { CacheProviderModule } from './providers/cache/provider.module';
import { UtilsModule } from './utils/utils.module';
import { DatabaseModule } from './providers/database/database.module';

import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigurationModule,
    UtilsModule,
    CacheProviderModule,
    DatabaseModule.forRoot(),
    CoreModule
  ],
  controllers: [AppController],
  providers: [
      AppService,
    ],
})
export class AppModule {}

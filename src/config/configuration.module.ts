import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { environments } from "./environments";
import { validationSchema } from "./configuration.validation";

import { MongoDatabaseConfigService } from "./mongo/configuration.service";
import { AppConfigService } from "./app/configuration.service"

import MongoDbConfig from './mongo/configuration';
import AppConfig from './app/configuration';
import ServicesConfig from './services/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: environments[`${process.env.NODE_ENV}`],
            ignoreEnvFile: process.env.NODE_ENV === 'production' || false,
            load: [
                AppConfig,
                MongoDbConfig,
                ServicesConfig
            ],
            isGlobal:true,
            validationSchema
        })
    ],
    providers: [
        ConfigService,
        AppConfigService,
        MongoDatabaseConfigService,
    ],
    exports: [
        ConfigService,
        AppConfigService,
        MongoDatabaseConfigService,
    ]
})
export class  ConfigurationModule {}
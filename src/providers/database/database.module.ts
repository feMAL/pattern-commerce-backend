import { DynamicModule, Module } from "@nestjs/common";
import { MongoDBProviderModule } from "./mongo/provider.module";

import ConfigMongo from '../../config/mongo/configuration';

@Module({
    providers: [
        MongoDBProviderModule
    ]
})
export class DatabaseModule {
    
    static forRoot(): DynamicModule{

        const providers = [];
        if(ConfigMongo().isEnabled) providers.push(MongoDBProviderModule);
        return {
            global: true,
            module: DatabaseModule,
            imports: providers,
            exports: providers,
        }
    }
}
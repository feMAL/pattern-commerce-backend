import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import Config from '../../../config/mongo/configuration';

@Module({
    imports: [
        MongooseModule.forRoot(Config().connection),
    ],
    providers: [],
    exports: []
})
export class MongoDBProviderModule {}
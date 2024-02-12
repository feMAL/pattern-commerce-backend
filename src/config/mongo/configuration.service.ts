import { ConfigService } from "@nestjs/config";

export class MongoDatabaseConfigService {
    constructor(private dbConfig: ConfigService){}

    get isEnabled(): string {
        return this.dbConfig.get('mongo.isEnabled')
    }

    get connection(): string {
        return this.dbConfig.get('mongo.connection')
    }
}
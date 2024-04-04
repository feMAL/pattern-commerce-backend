import { ConfigService } from "@nestjs/config";

export class ExternalServices {
    constructor(private config: ConfigService){}


    get acvUrl(): string {
        return this.config.get<string>('services.acvUrl');
    }
}
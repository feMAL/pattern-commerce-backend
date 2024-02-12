import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {

    constructor( private config: ConfigService){}

    get port(): string {
        return this.config.get<string>('app.port')
    }

    get host(): string {
        return this.config.get<string>('app.host')
    }

    get name(): string {
        return this.config.get<string>('app.name')
    }

    get environment(): string {
        return this.config.get<string>('app.environment')
    }

    get secretKey(): string {
        return this.config.get<string>('app.jwtSecret')
    }


    get jwtExp(): string {
        return this.config.get<string>('app.jwtExp')
    }

    get corsEnabled(): boolean {
        return this.config.get<boolean>('app.corsEnabled')
    }

    get context(): string {
        return this.config.get<string>('app.context')
    }

    get allowedOrigins(): string {
        return this.config.get<string>('app.origins')
    }
    
    get allowedHeaders(): string {
        return this.config.get<string>('app.allowedHeaders')
    }

    get allowedMethods(): string {
        return this.config.get<string>('app.allowedMethods')
    }
    
    get swaggerEnabled(): boolean {
        return this.config.get<boolean>('app.swaggerEnabled')
    }

    get swaggerPath(): string {
        return this.config.get<string>('app.swaggerPath')
    }
    
}
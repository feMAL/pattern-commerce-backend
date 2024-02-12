import { Inject, Logger } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";
import { ErrorManager } from "src/common/services/error.manager";

export class CacheService {
    constructor(
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ){}

    async set(name: string, value: any): Promise<any>{
        Logger.log(`Set setting: ${name}`, "CacheService");
        try {
            const valueSTR = value.toString();
            await this.cacheManager.set(name, valueSTR);                
        } catch (error) {
            ErrorManager.dispatchError(error);            
        }
    }

    async get(name: string): Promise<any>{
        Logger.log(`Get setting: ${name}`, "CacheService");
        try {
            const cacheSaved: string = await this.cacheManager.get(name);
            return JSON.parse(cacheSaved);
        } catch (error) {
            ErrorManager.dispatchError(error);
        }
    }

    async delete(name: string): Promise<any> {
        Logger.log(`Delete setting: ${name}`, "CacheService");
        await this.cacheManager.del(name);
    }
}
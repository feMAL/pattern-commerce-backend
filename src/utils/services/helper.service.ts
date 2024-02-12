import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { Cache } from "cache-manager";


@Injectable()
export class HelperService {

    constructor(
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ){}

    checkIfPasswordIsValid(password:string){
        const regexp = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8-15}/
        return regexp.test(password);
    }

    async setCacheValuesExamples(){
        Logger.log("setCacheValuesExamples", "HelperService");
        await this.cacheManager.set('cache_data', {hello: "world"});
        const cacheSaved = await this.cacheManager.get('cache_data');
        await this.cacheManager.del('cache_data'); 
        Logger.log("cacheSaved", "HelperService");
    }
}
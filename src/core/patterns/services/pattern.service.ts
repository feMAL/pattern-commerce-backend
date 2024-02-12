import { Injectable } from "@nestjs/common";
import { PatternRepository } from "../repos/pattern.repo";
import { GetPatternsQuery } from "../dtos/patterns.dto";

@Injectable()
export class PatternService {

    constructor( private patternRepo: PatternRepository){}

    async getAllProducts( filter :GetPatternsQuery) {
        
        if(filter.id! && !filter.name) filter = {}
        
        const data = await this.patternRepo.find(filter)

        return data;

    }

}
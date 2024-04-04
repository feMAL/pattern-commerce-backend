import { Injectable } from "@nestjs/common";
import { PatternTagRepository } from "../repos/tags.repo";
import { CreatePatternTagDTO } from "../dtos";

@Injectable()
export class PatternTagService {

    constructor(
        private patternTagRepo: PatternTagRepository
        ){}


    async findAllTags() {
        const data = await this.patternTagRepo.find({})
        return data;
    }


    async createTag(tag: CreatePatternTagDTO): Promise<any>{
        const data = await this.patternTagRepo.create( tag ); //ACTUALIZAR CACHE
        return data; 
    }

    async findTag(id: string) {
        return await this.patternTagRepo.findOne({_id: id})
    }


}
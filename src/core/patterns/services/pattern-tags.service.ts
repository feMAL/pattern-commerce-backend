import { Injectable } from "@nestjs/common";
import { PatternTagRepository } from "../repos/tags.repo";
import { CreatePatternTagDTO } from "../dtos";
import { PatternTag } from "../models";
import { ErrorManager } from "src/common/services/error.manager";

@Injectable()
export class PatternTagService {

    constructor(
        private patternTagRepo: PatternTagRepository
        ){}


    async findAllTags() {
        const data = await this.patternTagRepo.find({})
        return data;
    }


    async createTag(tag: CreatePatternTagDTO): Promise<PatternTag>{
        try {
            const exist = await this.findTagByName(tag.name)
            if(exist){
                throw new ErrorManager({type: "NOT_FOUND", message: `Tag ${tag.name} already exists`, context: PatternTagService.name})
            }
            tag.name = tag.name.toLowerCase();
            return await this.patternTagRepo.create( tag );           
        } catch (err) {
            ErrorManager.dispatchError(!err.message? err: err.message); 
        }

    }

    async findTagByName(name: string) {
        return await this.patternTagRepo.findOne({name: name.toLowerCase()})
    }

    async findTagById(id: string) {
        return await this.patternTagRepo.findOne({_id: id})
    }


}
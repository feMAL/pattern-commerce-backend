import { Injectable } from "@nestjs/common";
import { PatternVariantRepository } from "../repos/pattern-variant.repo";
import { CreatePatternTagDTO, CreatePatternVariantDTO, UpdateVariantPatternDTO } from "../dtos";
import { PatternTag, PatternVariant, PatternVariantDocument } from "../models";
import { PatternTagRepository } from "../repos/tags.repo";
import { PatternTagService } from "./pattern-tags.service";
import { ErrorManager } from "src/common/services/error.manager";

@Injectable()
export class PatternVariantService {

    constructor(
        private patternVariantRepo: PatternVariantRepository,
        private patternTagService: PatternTagService
    ){}


    async findVariantById ( variantId: string ) : Promise<PatternVariant>{
        return await this.patternVariantRepo.findOne({_id: variantId})
    }

    async findVariantByName ( variant: string ) {
        return await this.patternVariantRepo.findOne({name: variant.toUpperCase()});
    }

    async findVariants (  ) {
        return await this.patternVariantRepo.find({});
    }

    async createVariantPattern(patternVariant: CreatePatternVariantDTO): Promise<PatternVariant> {
        try{
            patternVariant.variant_identification = patternVariant.variant_identification.toUpperCase();

            const existPattern = await this.findVariantByName(patternVariant.variant_identification);
            if(existPattern){
                throw new ErrorManager({type: "CONFLICT", message: `Pattern Variant Identification Already Exist`, context: PatternVariantService.name})                
            }            

            const tags: PatternTag[] = [];
            
            await Promise.all(patternVariant.tags.map( async (tag: string | CreatePatternTagDTO) => {
                if(typeof tag === "string"){
                    const tagExist = await this.patternTagService.findTagByName(tag);
                    if(!tagExist){
                        throw new ErrorManager({type: "NOT_FOUND", message: `Variant Pattern ${tag} Not Exist`, context: PatternVariantService.name})
                    }
                    tags.push(tagExist);
                }else if(typeof tag === "object"){
                    const tagExist = await this.patternTagService.findTagByName(tag.name);
                    if(tagExist){
                        tags.push(tagExist);
                    }else{
                        const createTag = await this.patternTagService.createTag(tag)
                        if(!createTag){
                            throw new ErrorManager({type: "NOT_FOUND", message: `Category ${tag.name} was not created`, context: PatternVariantService.name});
                        }
                        tags.push(createTag);
                    }
                }
            }))

            const variantPatt = {
                ...patternVariant,
                tags: tags,
            }

            return await this.patternVariantRepo.create(variantPatt);

        }catch(err){
            console.log(err)
            ErrorManager.dispatchError(!err.message? err: err.message);
        }
    }

    async updateVariantPattern(variantId: string, body: UpdateVariantPatternDTO) {
        return await this.patternVariantRepo.findOneAndUpdate({_id: variantId}, body);
    }

    async checkIfExists(variants: string[]): Promise<PatternVariantDocument[]> {
        const result = [];
        for (let variantId of variants){
            const isExist = await this.findVariantById(variantId);
            if(isExist) result.push(isExist)
        }
        return result;
    }
}
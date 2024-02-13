import { CACHE_MANAGER, HttpException, Inject, Injectable } from "@nestjs/common";
import { PatternRepository } from "../repos/pattern.repo";
import { AddTagsToPatternDTO, AddVariantsToPatternDTO, CreatePatternDTO, GetPatternsDTO, UpdateVariantPatternDTO } from "../dtos";
import { PatternTagService } from "./pattern-tags.service";
import { PatternVariantService } from "./pattern-variant.service";
import { CacheService } from "src/utils/services/cache.service";
import { Pattern } from "../models";

@Injectable()
export class PatternService {

    constructor(
        private patternRepo: PatternRepository,
        private patternTagService: PatternTagService,
        private patternVariantService: PatternVariantService,
        ) { }

    async getAllPatterns(filter: GetPatternsDTO) {

        if (filter.id! && !filter.name) filter = {};
        const data = await this.patternRepo.find(filter)

        return data;

    }

    async createProduct(product: CreatePatternDTO) {
        product.pattern_name = product.title.toLowerCase().replace(/ /g, "_");
        const data = await this.patternRepo.create(product);
        return data;
    }

    async addTagToPattern (patternId: string , body: AddTagsToPatternDTO ) {

        const { tags } = body;

        await this.checkIfExistPattern(patternId);
        
        const filtredTagsExists = tags.filter(async ( tagId ) => await this.patternTagService.findTag(tagId));
        if(!filtredTagsExists.length) throw new HttpException('Tags Not Found', 404);


        /** continue */

    }

    
    async addVariantsToPattern (patternId: string , body: AddVariantsToPatternDTO ) {

        const { variants } = body;

        const pattern = await this.checkIfExistPattern(patternId);
        
        const filtredVariantsExists = await this.patternVariantService.checkIfExists(variants);
        if(!filtredVariantsExists.length) throw new HttpException('Variants Not Found', 404);

        pattern.variants = filtredVariantsExists;
    
        const newPatternSaved = await this.patternRepo.findOneAndUpdate({_id: patternId }, pattern )

        for(let variant of filtredVariantsExists){
            await this.patternVariantService.updateVariantPattern(variant._id, {patternID:pattern._id })
        }
        
        return newPatternSaved;
    }

    private async checkIfExistPattern(patternId: string) : Promise<Pattern> {
        const patternExist = await this.patternRepo.findOne({_id: patternId});
        if(!patternExist) throw new HttpException('Pattern not exist', 404)
        return patternExist
    }


}
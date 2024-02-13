import { Injectable } from "@nestjs/common";
import { PatternVariantRepository } from "../repos/pattern-variant.repo";
import { CreateVariantPatternDTO, UpdateVariantPatternDTO } from "../dtos";
import { PatternVariantDocument } from "../models";

@Injectable()
export class PatternVariantService {

    constructor(
        private patternVariantRepo: PatternVariantRepository
    ){}


    async findVariant ( variantId: string) {
        return await this.patternVariantRepo.findOne({_id: variantId})
    }

    async createVariantPattern(body: CreateVariantPatternDTO) {
        return await this.patternVariantRepo.create(body);
    }

    async updateVariantPattern(variantId: string, body: UpdateVariantPatternDTO) {
        return await this.patternVariantRepo.findOneAndUpdate({_id: variantId}, body);
    }


    async checkIfExists(variants: string[]): Promise<PatternVariantDocument[]> {
        const result = [];
        for (let variantId of variants){
            const isExist = await this.findVariant(variantId);
            if(isExist) result.push(isExist)
        }
        return result;
    }
}
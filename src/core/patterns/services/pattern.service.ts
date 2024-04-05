import { HttpException, Injectable } from "@nestjs/common";
import { PatternRepository } from "../repos/pattern.repo";
import { AddTagsToPatternDTO, AddVariantsToPatternDTO, CreatePatternDTO, CreatePatternVariantDTO, GetPatternsDTO, UpdateVariantPatternDTO } from "../dtos";
import { PatternTagService } from "./pattern-tags.service";
import { PatternVariantService } from "./pattern-variant.service";
import { CacheService } from "src/utils/services/cache.service";
import { Pattern, PatternVariant } from "../models";
import { ErrorManager } from "../../../common/services/error.manager";
import { Category } from "../models/category.model";
import { CreateCategoryDTO } from "../dtos/category.dto";
import { CategoryService } from "./category.service";

@Injectable()
export class PatternService {

    constructor(
        private readonly patternRepo: PatternRepository,
        private readonly patternTagService: PatternTagService,
        private readonly patternVariantService: PatternVariantService,
        private readonly categoryService: CategoryService
        ) { }

    async getPatternByIdentification(pattern_identification: string): Promise<Pattern> {
        return this.patternRepo.findOne({pattern_identification: pattern_identification.toUpperCase()})
    }

    async getAllPatterns(filter: GetPatternsDTO) {

        if (filter.id! && !filter.name) filter = {};
        const data = await this.patternRepo.find(filter)

        return data;

    }

    async createProduct(product: CreatePatternDTO) {
        try{
            const pattern = await this.getPatternByIdentification(product.pattern_identification.toUpperCase());
            
            if(pattern){
                throw new ErrorManager({type: "CONFLICT", message: `Pattern Identification Already Exist`, context: PatternService.name})
            }

            const variants: PatternVariant[] = [];

            await Promise.all(product.variants.map( async (variant: string | CreatePatternVariantDTO) => {
                if(typeof variant === 'string'){
                    const exist = await this.patternVariantService.findVariantByName(variant.toUpperCase());
                    if(!exist){
                        throw new ErrorManager({type: "NOT_FOUND", message: `Variant Pattern Not Exist`, context: PatternService.name})
                    }
                    variants.push(exist);
                }else if(typeof variant === 'object'){
                    const exist = await this.patternVariantService.findVariantByName(variant.variant_identification.toUpperCase());
                    if(exist){
                        variants.push(exist);
                    }else {
                        const createdVariant = await this.patternVariantService.createVariantPattern(variant);
                        if(!createdVariant){
                            throw new ErrorManager({type: "NOT_FOUND", message: `Variant Pattern ${variant.variant_identification} was not created`, context: PatternService.name})
                        }
                        variants.push(createdVariant);
                    }
                }else{
                    throw new ErrorManager({type: "BAD_REQUEST", message: `Variant Pattern Not Valid`, context: PatternService.name});
                }
            }));

            const categories: Category[] = []; 

            await Promise.all(product.categories.map( async (category: string | CreateCategoryDTO) => {
                if(typeof category === 'string'){
                    const exist = await this.categoryService.findCategoryByName(category.toLowerCase());
                    if(!exist){
                        throw new ErrorManager({type: "NOT_FOUND", message: `Variant Pattern ${category} Not Exist`, context: PatternService.name})
                    }
                }else if (typeof category === 'object'){
                    const exist = await this.categoryService.findCategoryByName(category.name.toLowerCase());
                    if(exist){
                        categories.push(exist);
                    }else{
                        const createdCategory = await this.categoryService.createCategory(category);
                        if(!createdCategory){
                            throw new ErrorManager({type: "NOT_FOUND", message: `Category ${category.name} was not created`, context: PatternService.name});
                        }
                        categories.push(createdCategory);
                    }
                }
            }))

            const saveProduct = {
                ...product,
                pattern_identification: product.pattern_identification.toUpperCase(),
                variants: variants,
                category: categories
            }

            const data = await this.patternRepo.create(saveProduct);
            return data;
        }catch(err){
            console.log(err)
            ErrorManager.dispatchError(!err.message? err: err.message);
        }
    }

    async addTagToPattern (patternId: string , body: AddTagsToPatternDTO ) {

        const { tags } = body;

        await this.checkIfExistPattern(patternId);
        
        const filtredTagsExists = tags.filter(async ( tagId ) => await this.patternTagService.findTagById(tagId));
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
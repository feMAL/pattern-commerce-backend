import { Body, Controller, Get, Param, Post, Query, UseGuards } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AddTagsToPatternDTO, GetPatternsDTO, CreatePatternDTO, AddVariantsToPatternDTO } from "../dtos";
import { PatternService } from "../services/pattern.service";
import { AccessValidationGuard } from "../../../common/guards/access-validation.guard";
import { Pattern } from "../models";

@ApiTags('Patterns')
@Controller('patterns')
export class PatternsController {

    constructor(
        private patternService: PatternService,
    ) {}
    
    @ApiOperation({
        summary: "Get All Patterns"
    })
    @Get()
    async getProducts(@Query() filter: GetPatternsDTO): Promise<Pattern[]> {
        return await this.patternService.getAllPatterns(filter);
    }

    @ApiOperation({
        summary: "Get Patterns By ID"
    })
    @Get(':product_id')
    async getProductsbyPatternIdentification(@Param('product_id') productID: string): Promise<Pattern> {
        return await this.patternService.getPatternByIdentification(productID);
    }

    //@UseGuards(AccessValidationGuard)
    @ApiOperation({
        summary: "Create a new Product"
    })
    @Post()
    @ApiBody({type: CreatePatternDTO})
    async createProduct (@Body() body: CreatePatternDTO): Promise<any>{
        return await this.patternService.createProduct(body);
    }

    /*@ApiOperation({
        summary: "Add Tags to Product"
    })
    @Post(':patternID/tags')
    @ApiBody({type: AddTagsToPatternDTO})
    async addTag (@Param('patternID') patternId: string, @Body() body: AddTagsToPatternDTO): Promise<any>{
        return await this.patternService.addTagToPattern(patternId, body);
    }


    @ApiOperation({
        summary: "Add Variant to Product"
    })
    @Post(':patternID/variant')
    @ApiBody({type: AddTagsToPatternDTO})
    async addVariant (@Param('patternID') patternId: string, @Body() body: AddVariantsToPatternDTO): Promise<any>{
        return await this.patternService.addVariantsToPattern(patternId, body);
    }*/

}
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AddTagsToPatternDTO, GetPatternsDTO, CreatePatternDTO, AddVariantsToPatternDTO } from "../dtos";
import { PatternService } from "../services/pattern.service";


@ApiTags('Patterns')
@Controller('patterns')
export class PatternsController {

    constructor(
        private patternService: PatternService,
    ) {}
    
    @ApiOperation({
        summary: "Get All Products"
    })
    @ApiResponse({
    })
    @Get('')
    async getProducts(@Query() filter: GetPatternsDTO): Promise<any> {
        return  await this.patternService.getAllPatterns(filter);
    }

    @ApiOperation({
        summary: "Get Product By ID"
    })
    @Get(':productID')
    async getProductsbyId(@Param('productID') productID: string) {

    }

    @ApiOperation({
        summary: "Create a new Product"
    })
    @Post('')
    @ApiBody({type: CreatePatternDTO})
    async createProduct (@Body() body: CreatePatternDTO): Promise<any>{
        return await this.patternService.createProduct(body);
    }

    @ApiOperation({
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
    }

}
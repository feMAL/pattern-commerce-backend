import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatePatternVariantDTO } from "../dtos";
import { PatternVariantService } from "../services/pattern-variant.service";
import { PatternVariant } from "../models";


@ApiTags('Patterns Variants')
@Controller('pattern-variant')
export class PatternVariantController {

    constructor(
        private patternVariantService: PatternVariantService,
    ) {}


    @ApiOperation({
        summary: "Add Variant to Product"
    })
    @Post()
    @ApiBody({type: CreatePatternVariantDTO})
    async createVariant ( @Body() body: CreatePatternVariantDTO): Promise<PatternVariant>{
        return await this.patternVariantService.createVariantPattern(body);
    }

    @ApiOperation({
        summary: "Get All Variant"
    })
    @Get()
    async getVariants (): Promise<any>{
        return await this.patternVariantService.findVariants();
    }

}

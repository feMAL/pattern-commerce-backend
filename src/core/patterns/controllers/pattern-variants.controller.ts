import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateVariantPatternDTO } from "../dtos";
import { PatternVariantService } from "../services/pattern-variant.service";


@ApiTags('Patterns Variants')
@Controller('pattern-variant')
export class PatternVariantController {

    constructor(
        private patternVariantService: PatternVariantService,
    ) {}


    @ApiOperation({
        summary: "Add Variant to Product"
    })
    @Post('')
    @ApiBody({type: CreateVariantPatternDTO})
    async addVariant ( @Body() body: CreateVariantPatternDTO): Promise<any>{
        return await this.patternVariantService.createVariantPattern(body);
    }

}

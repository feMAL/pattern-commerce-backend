import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetPatternsQuery } from "../dtos/patterns.dto";
import { PatternService } from "../services/pattern.service";


@ApiTags('Patterns')
@Controller('core/patterns')
export class PatternsController {

    constructor(
        private patternService: PatternService,

    ) {}
    
    @ApiOperation({
        summary: "Get All Products"
    })
    @ApiResponse({
        
    })
    @Get('/product')
    async getProducts(@Query() filter: GetPatternsQuery): Promise<any> {
        return  await this.patternService.getAllProducts(filter);
    }

    @ApiOperation({
        summary: "Get Product By ID"
    })
    @Get('/product/:productID')
    async getProductsbyId(@Param('productID') productID: string) {

    }


}
import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetPatternsQuery } from "../dtos/patterns.dto";


@ApiTags('Patterns')
@Controller('core/patterns')
export class PatternsController {

    constructor() {}
    
    @ApiOperation({
        summary: "Get All Products"
    })
    @Get('/product')
    async getProducts(@Query() query: GetPatternsQuery) {

    }

    @ApiOperation({
        summary: "Get Product By ID"
    })
    @Get('/product/:productID')
    async getProductsbyId(@Param('productID') productID: string) {

    }
}
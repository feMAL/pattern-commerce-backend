import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatePatternTagDTO } from "../dtos/";
import { PatternTagService } from "../services/pattern-tags.service";


@ApiTags('Pattern Tags')
@Controller('patterns-tags')
export class PatternTagsController {

    constructor(
        private patternService: PatternTagService,

    ) {}

    @ApiOperation({
        summary: "Get All Tags"
    })
    @ApiResponse({
        status:200
    })
    @Get()
    async getAllTags(): Promise<any> {
        return  await this.patternService.findAllTags();
    }

    @ApiOperation({
        summary: "Create Pattern Tags"
    })
    @ApiResponse({
        status: 200,
    })
    @Post()
    @ApiBody({type: CreatePatternTagDTO})
    async creatTag(@Body() body: CreatePatternTagDTO): Promise<any> {
        return  await this.patternService.createTag(body);
    }
}
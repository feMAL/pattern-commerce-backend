import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AboutService } from "../services/about.service";
import { About } from "../models/about.model";
import { CreateAboutDTO, UpdateAboutDTO } from "../dtos/about.dto";


@ApiTags('About')
@Controller('about')
export class AboutController {

    constructor(
        private readonly aboutService: AboutService,
    ) {}

    @Get()
    async getAbouts (): Promise<About[]> {
        return await this.aboutService.getAboutUs();
    }

    @Get(':about_me')
    async getAboutMe ( @Param('about_me') aboutName: string): Promise<About> {
        return await this.aboutService.getAboutMe(aboutName);
    }

    @Post()
    @ApiBody({type: CreateAboutDTO})
    async createAboutMe(@Body() body: CreateAboutDTO): Promise<About>{
        return this.aboutService.createAboutMe(body)
    }

    @Put(':about_me')
    @ApiBody({type: UpdateAboutDTO})
    async updateAboutMe(@Body() body: UpdateAboutDTO, @Param('about_me') about: string): Promise<About>{
        return this.aboutService.updateAboutMe(about, body)
    }

}

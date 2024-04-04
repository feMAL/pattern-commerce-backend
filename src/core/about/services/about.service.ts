import { Injectable } from "@nestjs/common";
import { About } from "../models/about.model";
import { AboutRepository } from "../repositories/about.repository";
import { CreateAboutDTO, UpdateAboutDTO } from "../dtos/about.dto";
import { ErrorManager } from "src/common/services/error.manager";


@Injectable()
export class AboutService {

    constructor(
        private readonly aboutRepository: AboutRepository
    ) {}

    async getAboutUs (): Promise<About[]> {
        return await this.aboutRepository.find({});
    }

    async getAboutMe (name: string): Promise<About> {
        return await this.aboutRepository.findOne({name});
    }

    async createAboutMe (about:CreateAboutDTO): Promise<About> {
        try{
            const {name} =  about;
            const existAbout = await this.getAboutMe(name);
            if(existAbout){
                throw new ErrorManager({type: "CONFLICT", message: "Name to about already exist, use another", context: AboutService.name})
            }
            return await this.aboutRepository.create(about);
    
        }catch(err){
            ErrorManager.dispatchError(!err.message? err: err.message);
        }
    }

    async updateAboutMe (name: string, about: UpdateAboutDTO): Promise<About> {
        try{
            if(!about.description && !about.image ){
                throw new ErrorManager({type: "BAD_REQUEST", message: "Body have not modify data", context: AboutService.name})
            }
            const existAbout = await this.getAboutMe(name);
            if(!existAbout){
                throw new ErrorManager({type: "NOT_FOUND", message: "Name to about does not exist", context: AboutService.name})
            }
            if(about.description){
                existAbout.description = about.description
            }
            if(about.image){
                existAbout.image = about.image
            }
            return await this.aboutRepository.update(existAbout);
    
        }catch(err){
            ErrorManager.dispatchError(!err.message? err: err.message);
        }
    }
}
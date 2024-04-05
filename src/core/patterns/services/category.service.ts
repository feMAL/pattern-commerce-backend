import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "../repos/category.repository";
import { Category } from "../models";
import { CreateCategoryDTO } from "../dtos/category.dto";
import { ErrorManager } from "src/common/services/error.manager";

@Injectable()
export class CategoryService {
    constructor(
        private readonly categoryRepository: CategoryRepository
    ){}

    async findCategoryByName(category: string): Promise<Category>{
        return await this.categoryRepository.findOne({name: category.toLowerCase()})
    }

    async createCategory( category: CreateCategoryDTO ): Promise<Category>{
        //Crear Category
        const exist = await this.findCategoryByName(category.name)
        if(exist){
            throw new ErrorManager({type: "NOT_FOUND", message: `Categories ${category.name} already exists`, context: CategoryService.name})
        }
        category.name = category.name.toLowerCase()
        return await this.categoryRepository.create(category);
    }

}
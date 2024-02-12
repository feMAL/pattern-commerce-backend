import { Injectable } from "@nestjs/common"
import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

@Injectable()
export abstract class MongoBaseRepository<T extends Document>{

    constructor(protected readonly baseModel: Model<T>) {}

    async findOne(
        entityFilter: FilterQuery<T>,
        projection?: Record<string, unknown>,
      ): Promise<T | null> {
        if (typeof projection === 'object') {
          return this.baseModel.findOne(entityFilter, { ...projection });
        } else {
          return this.baseModel.findOne(entityFilter);
        }
    }

    async find(
        entityFilter: FilterQuery<T>,
        offset = 0,
        limit = 0,
        projection?: FilterQuery<T>,
    ): Promise<T[] | null> {
        if (typeof projection === 'object') {
            return this.baseModel.find(entityFilter, projection).skip(offset).limit(limit);
        } else {
            return this.baseModel.find(entityFilter).skip(offset).limit(limit);
        }
    }

    async create(createEntity: unknown): Promise<T> {
        const entity = new this.baseModel(createEntity);
        return entity.save();
    }

    async findOneAndUpdate(
        entityFilter: FilterQuery<unknown>,
        updateEntityData?: UpdateQuery<unknown>,
    ): Promise<T | null> {
        return this.baseModel.findOneAndUpdate(entityFilter, { ...updateEntityData }, { new: true });
    }
    
    async findOneAndDelete(entityFilter: FilterQuery<T>): Promise<unknown | null> {
        return this.baseModel.findOneAndDelete(entityFilter);
    }
    
}
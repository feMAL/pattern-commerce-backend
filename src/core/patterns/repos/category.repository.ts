import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongoBaseRepository } from '../../../common/repositories/base.mongo.repository';
import { Category, CategoryDocument } from '../models';

export class CategoryRepository extends MongoBaseRepository<CategoryDocument> {
  constructor(@InjectModel(Category.name) categoryModel: Model<CategoryDocument>) {
    super(categoryModel);
  }
}

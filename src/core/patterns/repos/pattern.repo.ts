import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongoBaseRepository } from '../../../common/repositories/base.mongo.repository';
import { Pattern, PatternDocument } from '../models/pattern.model';

export class PatternRepository extends MongoBaseRepository<PatternDocument> {
  constructor(@InjectModel(Pattern.name) patternModel: Model<PatternDocument>) {
    super(patternModel);
  }
}

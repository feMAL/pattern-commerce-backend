import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongoBaseRepository } from '../../../common/repositories/base.mongo.repository';
import { PatternTag, PatternTagDocument } from '../models';

export class PatternTagRepository extends MongoBaseRepository<PatternTagDocument> {
  constructor(@InjectModel(PatternTag.name) patternModel: Model<PatternTagDocument>) {
    super(patternModel);
  }
}

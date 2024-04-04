
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongoBaseRepository } from '../../../common/repositories/base.mongo.repository';
import { PatternVariant, PatternVariantDocument } from '../models';

export class PatternVariantRepository extends MongoBaseRepository<PatternVariantDocument> {
  constructor(@InjectModel(PatternVariant.name) patternVariantModel: Model<PatternVariantDocument>) {
    super(patternVariantModel);
  }

}

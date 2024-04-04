
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongoBaseRepository } from '../../../common/repositories/base.mongo.repository';
import { About, AboutDocument } from '../models/about.model';

export class AboutRepository extends MongoBaseRepository<AboutDocument> {
  constructor(@InjectModel(About.name) aboutModel: Model<AboutDocument>) {
    super(aboutModel);
  }


  async update ( about: About ){
    return await this.findOneAndUpdate({name: about.name}, {...about});
}
}

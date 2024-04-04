import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongoBaseRepository } from '../../../common/repositories/base.mongo.repository';
import { Contact, ContactDocument } from '../models/contact.model';

export class ContactRepository extends MongoBaseRepository<ContactDocument> {
  constructor(@InjectModel(Contact.name) contactModel: Model<ContactDocument>) {
    super(contactModel);
  }
}

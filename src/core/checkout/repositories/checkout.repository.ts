import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongoBaseRepository } from '../../../common/repositories/base.mongo.repository';
import { Checkout, CheckoutDocument } from '../models/checkout.model';

export class CheckoutRepository extends MongoBaseRepository<CheckoutDocument> {
  constructor(@InjectModel(Checkout.name) checkoutModel: Model<CheckoutDocument>) {
    super(checkoutModel);
  }
}

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongoBaseRepository } from '../../../common/repositories/base.mongo.repository';
import { Client, ClientDocument } from '../models/client.model';

export class ClientRepository extends MongoBaseRepository<ClientDocument> {
  constructor(@InjectModel(Client.name) clientModel: Model<ClientDocument>) {
    super(clientModel);
  }
}

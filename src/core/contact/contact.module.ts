import { Module } from "@nestjs/common";
import { ContactController } from "./controllers/contact.controller";
import { ContactService } from "./services/contact.service";
import { ContactRepository } from "./repositories/contact.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Contact, ContactSchema } from "./models/contact.model";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),

    ],
    controllers: [ ContactController ],
    providers: [ 
        ContactService,
        ContactRepository
    ]
})
export class ContactModule {}
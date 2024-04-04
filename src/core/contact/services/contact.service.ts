import { Injectable } from "@nestjs/common";
import { CreateContactMessageDTO } from "../dtos/contact.dto";
import { ContactRepository } from "../repositories/contact.repository";
import { Contact } from "../models/contact.model";


@Injectable()
export class ContactService {

    constructor(
        private contactRepository: ContactRepository
    ) {}

    async saveContact(contactForm: CreateContactMessageDTO): Promise<Contact> {

        //enviar EMAIL con informacion de contacto

        const contactData = {...contactForm, message: contactForm.details}

        const contact = await this.contactRepository.create(contactData)

        return contact
    }
}
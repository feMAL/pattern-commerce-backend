import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { ContactService } from "../services/contact.service";
import { CreateContactMessageDTO } from "../dtos/contact.dto";


@ApiTags('Contact')
@Controller('contact')
export class ContactController {

    constructor(
        private contactService: ContactService,
    ) {}

    @Post()
    @ApiBody({
        type: CreateContactMessageDTO
    })
    async createContact (@Body() body: CreateContactMessageDTO ) {
        return this.contactService.saveContact(body)
    }

}

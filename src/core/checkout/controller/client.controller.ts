import { Body, Controller, Param, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreatePaymentOrderDTO } from "../dto/payment.dto";
import { CheckoutService } from "../service/checkout.service";

@Controller('client')
@ApiTags('Client')
export class ClientController {


    constructor(
        private readonly chekoutService: CheckoutService
    ){}

}
import { Body, Controller, Param, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreatePaymentOrderDTO } from "../dto/payment.dto";
import { CheckoutService } from "../service/checkout.service";

@Controller('checkout')
@ApiTags('Checkout')
export class CheckoutController {

    constructor(
        private readonly chekoutService: CheckoutService
    ){}

    @Post()
    @ApiBody({
        type: CreatePaymentOrderDTO
    })
    async createPayment(@Body() order: CreatePaymentOrderDTO ){
        return this.chekoutService.createCheckoutOrder(order)
    }

}
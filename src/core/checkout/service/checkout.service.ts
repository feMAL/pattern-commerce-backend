import { Inject, Injectable } from "@nestjs/common";
import { CheckoutRepository } from "../repositories/checkout.repository";
import { CreatePaymentOrderDTO } from "../dto/payment.dto";
import { ConfigType } from "@nestjs/config";
import config from "../../../config/app/configuration";
import paypal from '@paypal/checkout-server-sdk'

@Injectable()
export class CheckoutService {
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
        private checkoutRepository: CheckoutRepository
    ){}

    async createCheckoutOrder(checkout: CreatePaymentOrderDTO, orderId: string ){
       
    }
}
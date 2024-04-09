import { Inject, Injectable } from "@nestjs/common";
import { CheckoutRepository } from "../repositories/checkout.repository";
import { CreatePaymentOrderDTO } from "../dto/payment.dto";
import { ConfigType } from "@nestjs/config";
import config from "../../../config/app/configuration";
import { Checkout } from "../models/checkout.model";
import { ClientService } from "./client.service";
import { ErrorManager } from "src/common/services/error.manager";

@Injectable()
export class CheckoutService {
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
        private readonly checkoutRepository: CheckoutRepository,
        private readonly clientService: ClientService
    ){}

    async createCheckoutOrder({buy_id,total_amount,client,platform,order}: CreatePaymentOrderDTO): Promise<Checkout>{
        try {
            const clientExist = await this.clientService.getClientByMail(client.email);
            let newClient;
            if(!clientExist){
                //crear Cliente
                 newClient = await this.clientService.createClient(client)
            }
    
            const checkoutData:Partial<Checkout> = {
                buyId: buy_id,
                amount: total_amount.amount,
                currency_code: total_amount.currency_code,
                platform: platform.toLocaleUpperCase(),
                orderId: order.order_id,
                orderItems: order.items,
                buyStatus: order.status,
                client: clientExist? clientExist._id : newClient._id
            }
    
            return await this.checkoutRepository.create(checkoutData)
                
        } catch (err) {
            console.log(err)
            ErrorManager.dispatchError(!err.message? err: err.message); 
        }
    }
}
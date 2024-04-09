import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Checkout, CheckoutShema } from "./models/checkout.model";
import { CheckoutController } from "./controller/checkout.controller";
import { CheckoutService } from "./service/checkout.service";
import { CheckoutRepository } from "./repositories/checkout.repository";
import { ClientController } from "./controller/client.controller";
import { ClientService } from "./service/client.service";
import { ClientRepository } from "./repositories/client.repository";
import { Client, ClientSchema } from "./models/client.model";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Checkout.name, schema: CheckoutShema }]),
        MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
    ],
    controllers: [
        CheckoutController,
        ClientController
    ],
    providers: [
        CheckoutService,
        CheckoutRepository,
        ClientService,
        ClientRepository
    ]
})
export class CheckoutModule {}
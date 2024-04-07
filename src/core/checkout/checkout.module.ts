import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Checkout, CheckoutShema } from "./models/checkout.model";
import { CheckoutController } from "./controller/checkout.controller";
import { CheckoutService } from "./service/checkout.service";
import { CheckoutRepository } from "./repositories/checkout.repository";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Checkout.name, schema: CheckoutShema }]),
    ],
    controllers: [
        CheckoutController
    ],
    providers: [
        CheckoutService,
        CheckoutRepository
    ]
})
export class CheckoutModule {}
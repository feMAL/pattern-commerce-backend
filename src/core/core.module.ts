import { Module } from "@nestjs/common";
import { PatternModule } from "./patterns/patterns.module";
import { ContactModule } from "./contact/contact.module";
import { AboutModule } from "./about/about.module";
import { CheckoutModule } from "./checkout/checkout.module";

@Module({
    imports: [
        PatternModule,
        ContactModule,
        AboutModule,
        CheckoutModule
    ],
    exports: [
        PatternModule,
        ContactModule,
        AboutModule,
        CheckoutModule
    ]
})
export class CoreModule {}
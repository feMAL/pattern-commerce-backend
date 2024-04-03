import { Module } from "@nestjs/common";
import { PatternModule } from "./patterns/patterns.module";
import { ContactModule } from "./contact/contact.module";

@Module({
    imports: [
        PatternModule,
        ContactModule
    ],
    exports: [
        PatternModule,
        ContactModule
    ]
})
export class CoreModule {}
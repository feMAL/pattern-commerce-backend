import { Module } from "@nestjs/common";
import { PatternModule } from "./patterns/patterns.module";
import { ContactModule } from "./contact/contact.module";
import { AboutModule } from "./about/about.module";

@Module({
    imports: [
        PatternModule,
        ContactModule,
        AboutModule
    ],
    exports: [
        PatternModule,
        ContactModule
    ]
})
export class CoreModule {}
import { Module } from "@nestjs/common";
import { PatternModule } from "./patterns/patterns.module";

@Module({
    imports: [PatternModule]
})
export class CoreModule {}
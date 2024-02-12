import { Module } from "@nestjs/common";
import { PatternsController } from "./controllers/patterns.controller";

@Module({
    controllers: [PatternsController]
    
})
export class PatternModule {}
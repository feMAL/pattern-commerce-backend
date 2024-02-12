import { Module } from "@nestjs/common";
import { PatternsController } from "./controllers/patterns.controller";
import { PatternRepository } from "./repos/pattern.repo";
import { PatternService } from "./services/pattern.service";
import { Pattern, PatternsSchema } from "src/core/patterns/models/patterns.model";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Pattern.name, schema: PatternsSchema }])
    ],
    controllers: [PatternsController],
    providers: [
        PatternRepository,
        PatternService
    ]
    
})
export class PatternModule {}
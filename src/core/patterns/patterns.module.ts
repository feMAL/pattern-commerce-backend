import { Module } from "@nestjs/common";
import { PatternsController } from "./controllers/patterns.controller";
import { PatternRepository } from "./repos/pattern.repo";
import { PatternService } from "./services/pattern.service";
import { Category, CategorySchema, Pattern, PatternTag, PatternTagSchema, PatternVariant, PatternVariantSchema, PatternsSchema } from "./models";
import { MongooseModule } from "@nestjs/mongoose";
import { PatternTagRepository } from "./repos/tags.repo";
import { PatternTagService } from "./services/pattern-tags.service";
import { PatternTagsController } from "./controllers/patterns-tag.controller";
import { PatternVariantService } from "./services/pattern-variant.service";
import { PatternVariantRepository } from "./repos/pattern-variant.repo";
import { PatternVariantController } from "./controllers/pattern-variants.controller";
import { ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { CategoryService } from "./services/category.service";
import { CategoryRepository } from "./repos/category.repository";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Pattern.name, schema: PatternsSchema }]),
        MongooseModule.forFeature([{ name: PatternTag.name, schema: PatternTagSchema }]),
        MongooseModule.forFeature([{ name: PatternVariant.name, schema: PatternVariantSchema }]),
        MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
        HttpModule
    ],
    controllers: [
        PatternsController,
        PatternTagsController,
        PatternVariantController,
    ],
    providers: [
        PatternRepository,
        PatternService,
        PatternTagRepository,
        PatternTagService,
        PatternVariantRepository,
        PatternVariantService,
        ConfigService,
        CategoryService,
        CategoryRepository
    ]
})
export class PatternModule {}
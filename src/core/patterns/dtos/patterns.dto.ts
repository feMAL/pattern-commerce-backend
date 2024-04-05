import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger"
import { PatternTypes } from "../enums/pattern-types.enum";
import { CreatePatternVariantDTO } from "./pattern-variant.dto";
import { CreatePatternTagDTO } from "./pattern-tag.dto";
import { CreateCategoryDTO } from "./category.dto";
import { Type } from "class-transformer";

export class GetPatternsDTO {

    @IsOptional()
    @IsString()
    @ApiProperty({
        type: String,
        required : false
    })
    id?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        type: String,
        required : false
    })
    name?: string
}


export class CreatePatternDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    pattern_identification: string;

    @IsOptional()
    @ApiProperty({
        type: String,
        required : false
    })
    title?: string;

    @IsNumber()
    @ApiProperty({
        type: Number,
        required : true
    })
    price: number;

    @IsBoolean()
    @ApiProperty({
        type: Boolean,
        required : true
    })
    isExclusive: boolean;

    @IsString()
    @ApiProperty({
        type: String,
        enum: PatternTypes,
        required : true
    })
    type: PatternTypes;

    @IsArray()
    @Type(()=> CreatePatternVariantDTO)
    @ApiProperty({
        type: String,
        required : false,
        isArray: true
    })
    variants?: string[] | CreatePatternVariantDTO[];

    @IsArray()
    @Type(()=> CreateCategoryDTO)
    @ApiProperty({
        type: String,
        required : false,
        isArray: true
    })
    categories?: string[] | CreateCategoryDTO[];

}

export class AddVariantsToPatternDTO {

    @IsArray()
    @ApiProperty({
        type: String,
        required : true,
        isArray: true
    })
    variants: string[];

}


export class AddTagsToPatternDTO {
    
    @IsArray()
    @ApiProperty({
        type: String,
        required : true,
        isArray: true
    })
    tags: string[]
}

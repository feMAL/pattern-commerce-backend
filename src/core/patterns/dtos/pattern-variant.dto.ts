import { IsArray, IsNotEmpty, IsOptional, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger"
import { CreatePatternTagDTO } from "./pattern-tag.dto";
import { Type } from "class-transformer";

export class UpdateVariantPatternDTO {

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required : false
    })
    name?: string

    @IsOptional()
    @IsArray()
    @ApiProperty({
        type: String,
        required : false,
        isArray: true
    })
    image?: string[];

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required : false
    })
    color?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required : false
    })
    patternID?: string

}

export class CreatePatternVariantDTO {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required : true
    })
    variant_identification: string
    
    @IsOptional()
    @IsArray()
    @ApiProperty({
        type: String,
        required : false,
        isArray: true
    })
    image: string[]

    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    description: string;

    @IsArray()
    @Type(()=> CreatePatternTagDTO)
    @ApiProperty({
        type: String,
        required : false,
        isArray: true
    })
    tags?: string[] | CreatePatternTagDTO[];
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required : true
    })
    color: string;

}
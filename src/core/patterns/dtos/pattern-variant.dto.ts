import { IsArray, IsNotEmpty, IsOptional, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger"
import { ObjectId } from "mongoose";

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

export class CreateVariantPatternDTO {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required : true
    })
    name: string
    
    @IsOptional()
    @IsArray()
    @ApiProperty({
        type: String,
        required : false,
        isArray: true
    })
    image: string[]
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required : true
    })
    color: string;

}
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger"

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

    pattern_name?: string;

    @IsOptional()
    @IsArray()
    @ApiProperty({
        type: String,
        required : false,
        isArray: true
    })
    image: string[];

    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    title: string;

    @IsNumber()
    @ApiProperty({
        type: Number,
        required : true
    })
    price: number;

    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    description: string;

    @IsBoolean()
    @ApiProperty({
        type: Boolean,
        required : true
    })
    isExclusive: boolean;

    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    type: string;

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

import { IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAboutDTO {
    
    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    name: string

    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    description: string

    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    image: string

}


export class UpdateAboutDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required:false
    })
    description?: string

    @IsString()
    @ApiProperty({
        type: String,
        required : false
    })
    image?: string

}
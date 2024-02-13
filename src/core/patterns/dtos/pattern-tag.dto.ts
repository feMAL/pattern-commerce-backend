
import { IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class CreatePatternTagDTO {
    
    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    name: string;
    
    @IsString()
    @ApiProperty({
        type: String,
        required : true
    })
    description: string;   
}



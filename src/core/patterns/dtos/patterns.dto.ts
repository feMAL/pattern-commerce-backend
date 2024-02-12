import { IsOptional, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class GetPatternsQuery {

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
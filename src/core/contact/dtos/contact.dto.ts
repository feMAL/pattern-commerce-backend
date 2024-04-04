import { IsEmail, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateContactMessageDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required:false
    })
    name: string;

    @IsString()
    @ApiProperty({
        type: String,
        required:false
    })
    lastname: string;

    @IsEmail()
    @ApiProperty({
        type: String,
        required:false
    })
    mail: string;

    @IsString()
    @ApiProperty({
        type: String,
        required:false
    })
    details: string

}
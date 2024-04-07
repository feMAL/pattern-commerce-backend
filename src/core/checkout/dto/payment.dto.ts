import { IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentOrderDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required:false
    })
    currency_code: string;

    @IsString()
    @ApiProperty({
        type: String,
        required:false
    })
    value: string;
}
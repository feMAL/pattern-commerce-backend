import { IsArray, IsObject, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { PayPlatformEnum } from "../enum/checkout.enum";
import { Type } from "class-transformer";


export class PaymentAmountCurrencyDTO {
    
    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    currency_code: string;
    
    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    amount: string;
}

export class PaymentClientAddressDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    country_code: string;


    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    address_line_1: string;


    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    admin_area_1: string;

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    admin_area_2: string;


    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    postal_code: string;

}

export class PaymentClientDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    name: string

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    surname: string

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    email: string


    @IsObject()
    @ApiProperty({
        type: PaymentClientAddressDTO,
        required:true
    })
    address: PaymentClientAddressDTO
}


export class PaymentOrderItemsDTO {

        @IsString()
        @ApiProperty({
            type: String,
            required:true
        })
        name: string;
        
        @IsObject()
        @ApiProperty({
            type: PaymentAmountCurrencyDTO,
            required:true
        })
        unit_amount: PaymentAmountCurrencyDTO;

        @IsObject()
        @ApiProperty({
            type: PaymentAmountCurrencyDTO,
            required:true
        })
        tax: PaymentAmountCurrencyDTO;
        
        @IsString()
        @ApiProperty({
            type: String,
            required:true
        })
        quantity: string;
        
        @IsString()
        @ApiProperty({
            type: String,
            required:true
        })
        description: string;

}

export class PaymentOrderDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    order_id: string;

    @IsArray()
    @Type(() => PaymentOrderItemsDTO)
    @ApiProperty({
        type: PaymentOrderItemsDTO,
        required:true,
        isArray: true
    })
    items: PaymentOrderItemsDTO[];

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    status: string;
    
}

export class PaymentTotalDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    amount: string;

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    currency_code: string;
    
}

export class CreatePaymentOrderDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    buy_id: string;
 

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    platform: PayPlatformEnum;

    @IsObject()
    @ApiProperty({
        type: PaymentTotalDTO,
        required:true
    })
    total_amount: PaymentTotalDTO;

    @IsObject()
    @ApiProperty({
        type: PaymentOrderDTO,
        required:true
    })
    order: PaymentOrderDTO;

    @IsObject()
    @ApiProperty({
        type: PaymentClientDTO,
        required:true
    })
    client: PaymentClientDTO;
}
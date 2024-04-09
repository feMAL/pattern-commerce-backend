import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PayPlatformEnum } from '../enum/checkout.enum';

export class PaymentAmountCurrency {

    currency_code: string;

    amount: string;
}

export class CkeckoutOrderItems {
    
    name: string;
    
    unit_amount: PaymentAmountCurrency;

    tax: PaymentAmountCurrency;
    
    quantity: string;
    
    description: string;

}

export type CheckoutDocument = Checkout  & Document;
@Schema()
export class Checkout extends Document {

    @Prop({ type: String, required: true})
    buyId: string;

    @Prop({ type: String, required: true})
    amount: string;

    @Prop({ type: String, required: true})
    currency_code: string;

    @Prop({ type: String, enum:PayPlatformEnum, required: true})
    platform: string;

    @Prop({ type: String, required: true})
    buyStatus: string;

    @Prop({ type: String, required: true})
    orderId: string;

    @Prop([{ type: CkeckoutOrderItems, required: true}])
    orderItems: CkeckoutOrderItems[]

    @Prop({ type: Types.ObjectId, ref: "Client", required: true})
    client: string;

}


export const CheckoutShema = SchemaFactory.createForClass(Checkout);
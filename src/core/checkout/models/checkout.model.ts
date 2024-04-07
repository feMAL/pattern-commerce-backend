import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type CheckoutDocument = Checkout  & Document;
@Schema()
export class Checkout extends Document {

    @Prop({ type: String, required: true})
    orderId: string;

}


export const CheckoutShema = SchemaFactory.createForClass(Checkout);
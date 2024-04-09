import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export class PaymentClientAddress {
    
    @Prop({ type: String, required: true})
    country_code: string;

    @Prop({ type: String, required: true})
    address_line_1: string;

    @Prop({ type: String, required: true})
    admin_area_1: string;

    @Prop({ type: String, required: true})
    admin_area_2: string;

    @Prop({ type: String, required: true})
    postal_code: string;

}

export type ClientDocument = Client  & Document;
@Schema()
export class Client extends Document {

    @Prop({ type: String, required: true})
    name: string

    @Prop({ type: String, required: true})
    surname: string

    @Prop({ type: String, required: true})
    email: string

    @Prop({ type: PaymentClientAddress, required: true})
    address: PaymentClientAddress

}


export const ClientSchema = SchemaFactory.createForClass(Client);
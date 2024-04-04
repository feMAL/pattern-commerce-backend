import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type ContactDocument = Contact  & Document;
@Schema()
export class Contact extends Document {

    @Prop({ type: String, required: true})
    name: string;

    @Prop({ type: String, required: true})
    lastname: string;

    @Prop({ type: String, required: true})
    mail: string;

    @Prop({ type: String, required: true})
    message: string;

    @Prop({type: Date, default: new Date()})
    createdAt?: Date
  
    @Prop({type: Date, default: new Date()})
    updatedAt?: Date
    
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
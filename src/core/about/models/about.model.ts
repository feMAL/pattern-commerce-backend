import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type AboutDocument = About  & Document;
@Schema()
export class About extends Document {

    @Prop({ type: String, required: true, unique: true})
    name: string;

    @Prop({ type: String, required: true})
    description: string;

    @Prop({ type: String, default: 'null', required: true})
    image: string;

    @Prop({type: Date, default: new Date()})
    createdAt?: Date
  
    @Prop({type: Date, default: new Date()})
    updatedAt?: Date
    
}

export const AboutSchema = SchemaFactory.createForClass(About);
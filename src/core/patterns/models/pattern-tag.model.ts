import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type PatternTagDocument = PatternTag  & Document;
@Schema()
export class PatternTag extends Document {

    @Prop({ type: String, required: true})
    name: string;

    @Prop({ type: String, required: true})
    description: string;

    @Prop({type: Date, default: new Date()})
    createdAt?: Date
  
    @Prop({type: Date, default: new Date()})
    updatedAt?: Date
    
}

export const PatternTagSchema = SchemaFactory.createForClass(PatternTag);
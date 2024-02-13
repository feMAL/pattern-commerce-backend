import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';

export type PatternVariantDocument = PatternVariant  & Document;

@Schema()
export class PatternVariant extends Document {

    @Prop({ type: String, required: true})
    name : string;

    @Prop({ type: [String], required: true, default: []})
    image: string[];

    @Prop( { type: String, required: true})
    color: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'patterns', required: false})
    patternID?: ObjectId;

    @Prop({type: Date, default: new Date()})
    createdAt?: Date
  
    @Prop({type: Date, default: new Date()})
    updatedAt?: Date

}

export const PatternVariantSchema = SchemaFactory.createForClass(PatternVariant)

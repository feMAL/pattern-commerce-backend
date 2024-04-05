import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId, Types } from 'mongoose';
import { PatternTag } from './pattern-tag.model';

export type PatternVariantDocument = PatternVariant  & Document;

@Schema()
export class PatternVariant extends Document {

    @Prop({ type: String, required: true, unique: true})
    variant_identification: string;

    @Prop([{ type: String, default: []}])
    image: string[];

    @Prop({ type: String, required: true})
    description: string;

    @Prop( { type: String, required: true})
    color: string;

    @Prop([{type: Types.ObjectId , ref: 'patterntag', default:[]}])
    tags: PatternTag[];

    @Prop({type: Date, default: new Date()})
    createdAt?: Date
  
    @Prop({type: Date, default: new Date()})
    updatedAt?: Date

}

export const PatternVariantSchema = SchemaFactory.createForClass(PatternVariant)

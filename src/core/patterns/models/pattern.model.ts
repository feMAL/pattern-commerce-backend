import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { PatternTag, PatternVariant } from '.';

export type PatternDocument = Pattern & Document;
@Schema()
export class Pattern extends Document {

    @Prop({type: String})
    title: string;

    @Prop({type: String, required: true})
    pattern_name: string;

    @Prop({ type: Number, required: true})
    price: number;

    @Prop( {type: [String], default: []})
    images: string[];
    
    @Prop({type:Boolean, default: false})
    isExclusive: boolean;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId }], ref: 'patternvariants',  default:[]})  
    variants: PatternVariant[];

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId }], ref: 'patterntags', default:[]})
    tags: string[];

    @Prop({type: String})
    description: string;

    @Prop({type: Date, default: new Date()})
    createdAt?: Date
  
    @Prop({type: Date, default: new Date()})
    updatedAt?: Date

}


export const PatternsSchema = SchemaFactory.createForClass(Pattern);
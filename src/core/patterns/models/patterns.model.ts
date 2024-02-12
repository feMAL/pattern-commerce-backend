import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


export type PatternTagDocument = PatternTagVariant  & Document;
@Schema()
export class PatternTagVariant extends Document {

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    description: string;
    
}


export type PatternVariantDocument = PatternVariant  & Document;
@Schema()
export class PatternVariant extends Document {

    @Prop()
    name : string;

    @Prop()
    image: string[];

    @Prop()
    color: string;
}

export type PatternDocument = Pattern & Document;
@Schema()
export class Pattern extends Document {

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop( {type: [String], default: []})
    image: string;
    
    @Prop({type:Boolean, default: false})
    isExclusive: boolean;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId }], ref: 'pattern_variant',  default:[]})  
    variants: PatternVariant[];

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId }], ref: 'pattern_tag', default:[]})
    tags: PatternTagDocument[];

    @Prop({type: String})
    description: string; 

}


export const PatternsSchema = SchemaFactory.createForClass(Pattern);
export const PatternVariantSchema = SchemaFactory.createForClass(PatternVariant)
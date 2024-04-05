import { Prop, SchemaFactory, Schema} from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PatternTag, PatternVariant } from '.';
import { PatternTypes } from '../enums/pattern-types.enum';
import { Category } from './category.model';

export type PatternDocument = Pattern & Document;
@Schema()
export class Pattern extends Document {

    @Prop({type: String, required: true, unique: true})
    pattern_identification: string;

    @Prop({type: String, default: ""})
    title: string;

    @Prop({type:Boolean, required: true, default: false})
    isExclusive: boolean;

    @Prop({type: Number, required: true})
    price: number;

    @Prop([{type: Types.ObjectId , ref: 'patternvariant',  default:[]}])  
    variants: PatternVariant[];

    @Prop({type: String, enum:PatternTypes, required: true})
    type: PatternTypes;

    @Prop({type: Types.ObjectId , ref: 'category', required: true})
    categories: Category[];

    @Prop({type: Date, default: new Date()})
    createdAt?: Date
  
    @Prop({type: Date, default: new Date()})
    updatedAt?: Date

}


export const PatternsSchema = SchemaFactory.createForClass(Pattern);
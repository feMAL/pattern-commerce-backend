import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type CategoryDocument = Category  & Document;
@Schema()
export class Category extends Document {

    @Prop({ type: String, required: true, unique: true})
    name: string;

    @Prop({ type: String, required: true})
    description: string;

    @Prop({ type: Date, default: new Date()})
    createdAt?: Date
  
    @Prop({ type: Date, default: new Date()})
    updatedAt?: Date

}

export const CategorySchema = SchemaFactory.createForClass(Category);
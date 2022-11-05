import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Option } from 'src/question/option.model';

export type QuestionsDocument = Questions & Document;

@Schema()
export class Questions {
    @Prop()
    title: string;

    @Prop()
    difficulty: number;

    @Prop()
    type: string;

    @Prop()
    options: Array<string>;

    @Prop()
    correct:string;
}

export const QuestionsSchema = SchemaFactory.createForClass(Questions);

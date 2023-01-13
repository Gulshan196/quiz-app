import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Questions, QuestionsDocument } from './entities/question.entity';
export declare class QuestionsService {
    private userModel;
    constructor(userModel: Model<QuestionsDocument>);
    create(createQuestionsDto: CreateQuestionDto): Promise<Questions>;
    findAll(): Promise<Questions[]>;
    findOne(id: number): string;
    update(id: number, updateQuestionDto: UpdateQuestionDto): string;
    remove(id: number): string;
}

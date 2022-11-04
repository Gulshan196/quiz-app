import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Questions, QuestionsDocument } from './entities/question.entity';

@Injectable()
export class QuestionsService {

  constructor(@InjectModel(Questions.name) private userModel: Model<QuestionsDocument>) { }
  async create(createQuestionsDto: CreateQuestionDto): Promise<Questions> {
    const createdquestion = new this.userModel(createQuestionsDto);
    return createdquestion.save();
  }
  findAll() {
    return `This action returns all questions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}

import {IsArray, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  title: string;

  @IsNumber()
  difficulty: number;

  @IsString()
  type: string;

  @IsArray()
  options: Array<string>;

  @IsString()
  correct:string;

}
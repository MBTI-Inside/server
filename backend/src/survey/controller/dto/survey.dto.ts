import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSurveyDto {
  @IsString()
  subject: string;

  @ValidateNested({ each: true })
  @Type(() => SurveyAnswerDto)
  answer: SurveyAnswerDto[];
}

export class UpdateSurveyDto {
  @IsString()
  @IsOptional()
  subject: string;

  @ValidateNested({ each: true })
  @Type(() => SurveyAnswerDto)
  @IsOptional()
  answer: SurveyAnswerDto[];
}

export class SurveyAnswerDto {
  @IsString()
  type: string;

  @IsString()
  select: string;

  @IsNumber()
  proportion: number;
}

import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { MbtiType } from 'src/survey/domain/survey.domain';

export class CreateSurveyDto {
  @IsString()
  subject: string;

  @ValidateNested({ each: true })
  @Type(() => SurveyAnswerDto)
  answer: SurveyAnswerDto[];

  @IsEnum(MbtiType)
  mbtiType: MbtiType;
}

export class UpdateSurveyDto {
  @IsString()
  @IsOptional()
  subject: string;

  @ValidateNested({ each: true })
  @Type(() => SurveyAnswerDto)
  @IsOptional()
  answer: SurveyAnswerDto[];

  @IsEnum(MbtiType)
  @IsOptional()
  mbtiType: MbtiType;
}

export class SurveyAnswerDto {
  @IsString()
  type: string;

  @IsString()
  content: string;

  @IsNumber()
  proportion: number;
}

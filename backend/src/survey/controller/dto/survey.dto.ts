import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  IAnswer,
  ISurveyProperties,
  MbtiType
} from 'src/survey/domain/survey.domain';
import { ApiProperty } from '@nestjs/swagger';

export class SurveyAnswerDto {
  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  proportion: number;
}

export class CreateSurveyDto {
  @ApiProperty({ required: true })
  @IsString()
  subject: string;

  @ApiProperty({ type: [SurveyAnswerDto], required: true })
  @ValidateNested({ each: true })
  @Type(() => SurveyAnswerDto)
  answer: SurveyAnswerDto[];

  @ApiProperty({ enum: MbtiType, required: true })
  @IsEnum(MbtiType)
  mbtiType: MbtiType;
}

export class UpdateSurveyDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  subject: string;

  @ApiProperty({ type: [SurveyAnswerDto] })
  @ValidateNested({ each: true })
  @Type(() => SurveyAnswerDto)
  @IsOptional()
  answer: SurveyAnswerDto[];

  @ApiProperty({ enum: MbtiType })
  @IsEnum(MbtiType)
  @IsOptional()
  mbtiType: MbtiType;
}

export class SurveyResponse implements ISurveyProperties {
  @ApiProperty()
  id: string;

  @ApiProperty()
  subject: string;

  @ApiProperty({ type: [SurveyAnswerDto] })
  answer: IAnswer[];

  @ApiProperty({ enum: MbtiType })
  mbtiType: MbtiType;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}

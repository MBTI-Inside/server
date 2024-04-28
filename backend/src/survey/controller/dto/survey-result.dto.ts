import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

export class CreateSurveyResultDto {
  @ValidateNested({ each: true })
  @Type(() => ResultsDto)
  results: ResultsDto[];

  @IsString()
  finalType: string;

  @IsString()
  finalTypeProportion: number;

  @IsString()
  userId: string;
}

export class ResultsDto {
  @IsString()
  surveyId: string;

  @IsString()
  answer: string;

  @IsString()
  proportion: number;

  @IsString()
  select: string;

  @IsString()
  type: string;
}

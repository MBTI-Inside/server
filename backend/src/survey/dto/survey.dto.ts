import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import { IAnswer } from '../domain/survey.domain';
import { SortType } from 'src/common/types';
import { Type } from 'class-transformer';

// export class CreateSurveyDto {
//   @IsObject({ each: true })
//   results: {
//     subject_id: string;
//     answer: string;
//     proportion: number;
//     select: string;
//     type: string;
//   }[];

//   @IsString()
//   finalType: string;

//   @IsString()
//   finalTypeProportion: number;
// }

// export class CreateSurveyCommand {
//   constructor(
//     private readonly userId: string,
//     private readonly results: {
//       subject_id: string;
//       answer: string;
//       proportion: number;
//       select: string;
//       type: string;
//     }[],
//     private readonly finalType: string,
//     private readonly finalTypeProportion: number
//   ) {}
// }

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

export class GetAllSurveyQuery {
  constructor(
    readonly limit: number,
    readonly skip: number,
    readonly sortField: string,
    readonly sortType: SortType
  ) {}
}

export class GetOneSurveyQuery {
  constructor(readonly surveyId: string) {}
}

export class CreateSurveyCommand {
  constructor(readonly subject: string, readonly answer: IAnswer[]) {}
}

export class UpdateSurveyCommand {
  constructor(
    readonly surveyId: string,
    readonly subject: string,
    readonly answer: IAnswer[]
  ) {}
}

export class DeleteSurveyCommand {
  constructor(readonly surveyId: string) {}
}
